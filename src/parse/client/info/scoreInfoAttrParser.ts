import parsimmon from "parsimmon";
import ScoreInfoAttr from "../../../info/ScoreInfoAttr";
import number from "../../util/number";
import space from "../../util/space";

const { alt, seq, string } = parsimmon;

interface MateOrCentipawn {
  mate?: number;
  centipawn?: number;
}

const mate = seq(string("mate"), space, number) //
  .map<MateOrCentipawn>(([, , mate]) => ({ mate }));

const centipawn = seq(string("cp"), space, number) //
  .map<MateOrCentipawn>(([, , centipawn]) => ({ centipawn }));

/** A parser that parses a {@link ScoreInfoAttr}. */
export default string("score")
  .skip(space)
  .then(
    seq(
      alt(mate, centipawn),
      seq(space, string("lowerbound"))
        .map(() => true)
        .fallback(false),
      seq(space, string("upperbound"))
        .map(() => true)
        .fallback(false)
    )
  )
  .map(
    ([score, lowerBound, upperBound]) =>
      new ScoreInfoAttr(score.centipawn, score.mate, lowerBound, upperBound)
  );
