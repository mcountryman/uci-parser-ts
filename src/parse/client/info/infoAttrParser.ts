import parsimmon from "parsimmon";
import CpuLoadInfoAttr from "../../../info/CpuLoadInfoAttr";
import CurrentMoveInfoAttr from "../../../info/CurrentMoveInfoAttr";
import CurrentMoveNumberInfoAttr from "../../../info/CurrentMoveNumberInfoAttr";
import DepthInfoAttr from "../../../info/DepthInfoAttr";
import HashFullInfoAttr from "../../../info/HashFullInfoAttr";
import InfoAttr from "../../../info/InfoAttr";
import MultiPrincipalVariationInfoAttr from "../../../info/MultiPrincipalVariationInfoAttr";
import NodesSearchedInfoAttr from "../../../info/NodesSearchedInfoAttr";
import NpsInfoAttr from "../../../info/NpsInfoAttr";
import PrincipalVariationInfoAttr from "../../../info/PrincipalVariationInfoAttr";
import RefutationInfoAttr from "../../../info/RefutationInfoAttr";
import SbHitsInfoAttr from "../../../info/SbHitsInfoAttr";
import SelectiveDepthInfoAttr from "../../../info/SelectiveDepthInfoAttr";
import StringInfoAttr from "../../../info/StringInfoAttr";
import TbHitsInfoAttr from "../../../info/TbHitsInfoAttr";
import TimeInfoAttr from "../../../info/TimeInfoAttr";
import move from "../../util/move";
import number from "../../util/number";
import rest from "../../util/rest";
import space from "../../util/space";
import currLineInfoAttrParser from "./currLineInfoAttrParser";
import scoreInfoAttrParser from "./scoreInfoAttrParser";

const { alt, sepBy, string } = parsimmon;

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
