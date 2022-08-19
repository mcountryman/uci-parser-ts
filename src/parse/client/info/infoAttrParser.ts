import { alt, sepBy, string } from "parsimmon";
import CpuLoadInfoAttr from "../../../commands/client/info/CpuLoadInfoAttr";
import CurrentMoveInfoAttr from "../../../commands/client/info/CurrentMoveInfoAttr";
import CurrentMoveNumberInfoAttr from "../../../commands/client/info/CurrentMoveNumberInfoAttr";
import DepthInfoAttr from "../../../commands/client/info/DepthInfoAttr";
import HashFullInfoAttr from "../../../commands/client/info/HashFullInfoAttr";
import InfoAttr from "../../../commands/client/info/InfoAttr";
import MultiPrincipalVariationInfoAttr from "../../../commands/client/info/MultiPrincipalVariationInfoAttr";
import NodesSearchedInfoAttr from "../../../commands/client/info/NodesSearchedInfoAttr";
import NpsInfoAttr from "../../../commands/client/info/NpsInfoAttr";
import PrincipalVariationInfoAttr from "../../../commands/client/info/PrincipalVariationInfoAttr";
import RefutationInfoAttr from "../../../commands/client/info/RefutationInfoAttr";
import SbHitsInfoAttr from "../../../commands/client/info/SbHitsInfoAttr";
import SelectiveDepthInfoAttr from "../../../commands/client/info/SelectiveDepthInfoAttr";
import StringInfoAttr from "../../../commands/client/info/StringInfoAttr";
import TbHitsInfoAttr from "../../../commands/client/info/TbHitsInfoAttr";
import TimeInfoAttr from "../../../commands/client/info/TimeInfoAttr";
import move from "../../util/move";
import number from "../../util/number";
import rest from "../../util/rest";
import space from "../../util/space";
import currLineInfoAttrParser from "./currLineInfoAttrParser";
import scoreInfoAttrParser from "./scoreInfoAttrParser";

/** An {@link InfoAttr} parser. */
export default alt<InfoAttr>(
  string("depth")
    .skip(space)
    .then(number)
    .map((n) => new DepthInfoAttr(n)),

  string("seldepth")
    .skip(space)
    .then(number)
    .map((n) => new SelectiveDepthInfoAttr(n)),

  string("time")
    .skip(space)
    .then(number)
    .map((n) => new TimeInfoAttr(n)),

  string("nodes")
    .skip(space)
    .then(number)
    .map((n) => new NodesSearchedInfoAttr(n)),

  string("currmove")
    .skip(space)
    .then(move)
    .map((m) => new CurrentMoveInfoAttr(m)),

  alt(string("currmovenumber"), string("currmovenum"))
    .skip(space)
    .then(number)
    .map((n) => new CurrentMoveNumberInfoAttr(n)),

  string("hashfull")
    .skip(space)
    .then(number)
    .map((n) => new HashFullInfoAttr(n)),

  string("nps")
    .skip(space)
    .then(number)
    .map((n) => new NpsInfoAttr(n)),

  string("tbhits")
    .skip(space)
    .then(number)
    .map((n) => new TbHitsInfoAttr(n)),

  string("sbhits")
    .skip(space)
    .then(number)
    .map((n) => new SbHitsInfoAttr(n)),

  string("cpuload")
    .skip(space)
    .then(number)
    .map((n) => new CpuLoadInfoAttr(n)),

  string("string")
    .skip(space)
    .then(rest)
    .map((s) => new StringInfoAttr(s)),

  string("pv")
    .skip(space)
    .then(sepBy(move, space))
    .map((m) => new PrincipalVariationInfoAttr(m)),

  string("multipv")
    .skip(space)
    .then(number)
    .map((n) => new MultiPrincipalVariationInfoAttr(n)),

  string("refutation")
    .skip(space)
    .then(sepBy(move, space))
    .map((m) => new RefutationInfoAttr(m)),

  scoreInfoAttrParser,
  currLineInfoAttrParser
);
