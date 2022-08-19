import { sepBy, seq } from "parsimmon";
import CurrLineInfoAttr from "../../../commands/client/info/CurrLineInfoAttr";
import move from "../../util/move";
import number from "../../util/number";
import space from "../../util/space";
import spaceDelim from "../../util/spaceDelim";

/** A {@link CurrLineInfoAttr} parser. */
export default spaceDelim(
  "currline",
  seq(
    seq(sepBy(number, space), space)
      .map(([cpuIds]) => cpuIds)
      .fallback([]),
    sepBy(move, space).fallback([])
  ),
  ([n, m]) => new CurrLineInfoAttr(n, m)
);
