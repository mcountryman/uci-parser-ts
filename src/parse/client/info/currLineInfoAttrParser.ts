import parsimmon from "parsimmon";
import CurrLineInfoAttr from "../../../commands/client/info/CurrLineInfoAttr";
import move from "../../util/move";
import number from "../../util/number";
import space from "../../util/space";

const { sepBy, seq, string } = parsimmon;

/** A {@link CurrLineInfoAttr} parser. */
export default string("currline")
  .skip(space)
  .then(
    seq(
      seq(sepBy(number, space), space)
        .map(([cpuIds]) => cpuIds)
        .fallback([]),
      sepBy(move, space).fallback([])
    )
  )
  .map(([n, m]) => new CurrLineInfoAttr(n, m));
