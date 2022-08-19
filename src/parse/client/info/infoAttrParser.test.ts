import CpuLoadInfoAttr from "../../../commands/client/info/CpuLoadInfoAttr";
import CurrentMoveInfoAttr from "../../../commands/client/info/CurrentMoveInfoAttr";
import CurrentMoveNumberInfoAttr from "../../../commands/client/info/CurrentMoveNumberInfoAttr";
import DepthInfoAttr from "../../../commands/client/info/DepthInfoAttr";
import HashFullInfoAttr from "../../../commands/client/info/HashFullInfoAttr";
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
import infoAttrParser from "./infoAttrParser";

test.each([
  ["depth 4", 4],
  ["depth    69.420", 69.42],
  ["depth\t-69.420", -69.42],
])("Given `%s`, should parse ", (command, depth) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(DepthInfoAttr);
  expect(parsed as DepthInfoAttr).toHaveProperty("depth", depth);
});

test.each([
  ["seldepth 4", 4],
  ["seldepth    69.420", 69.42],
  ["seldepth\t-69.420", -69.42],
])("Given `%s`, should parse a `SelectiveDepthInfoCommand`", (command, depth) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(SelectiveDepthInfoAttr);
  expect(parsed as SelectiveDepthInfoAttr).toHaveProperty("depth", depth);
});

test.each([
  ["time 4", 4],
  ["time    69.420", 69.42],
  ["time\t-69.420", -69.42],
])("Given `%s`, should parse a `TimeInfoCommand`", (command, timeMs) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(TimeInfoAttr);
  expect(parsed as TimeInfoAttr).toHaveProperty("timeMs", timeMs);
});

test.each([
  ["nodes 4", 4],
  ["nodes    69.420", 69.42],
  ["nodes\t-69.420", -69.42],
])("Given `%s`, should parse a `NodesSearchedInfoCommand`", (command, nodes) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(NodesSearchedInfoAttr);
  expect(parsed as NodesSearchedInfoAttr).toHaveProperty("nodes", nodes);
});

test.each([
  ["currmove a4a3q", "a4a3q"],
  ["currmove    a4a3q", "a4a3q"],
  ["currmove\ta4a3", "a4a3"],
])("Given `%s`, should parse a `CurrentMoveInfoCommand`", (command, move) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(CurrentMoveInfoAttr);
  expect(parsed as CurrentMoveInfoAttr).toHaveProperty("move", move);
});

test.each([
  ["currmovenum 4", 4],
  ["currmovenum    69.420", 69.42],
  ["currmovenum\t-69.420", -69.42],
])("Given `%s`, should parse a `CurrentMoveNumberInfoCommand`", (command, moveNumber) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(CurrentMoveNumberInfoAttr);
  expect(parsed as CurrentMoveNumberInfoAttr).toHaveProperty("moveNumber", moveNumber);
});

test.each([
  ["hashfull 4", 4],
  ["hashfull    69.420", 69.42],
  ["hashfull\t-69.420", -69.42],
])("Given `%s`, should parse a `HashFullInfoCommand`", (command, hashFull) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(HashFullInfoAttr);
  expect(parsed as HashFullInfoAttr).toHaveProperty("hashFull", hashFull);
});

test.each([
  ["nps 4", 4],
  ["nps    69.420", 69.42],
  ["nps\t-69.420", -69.42],
])("Given `%s`, should parse a `NpsInfoCommand`", (command, nps) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(NpsInfoAttr);
  expect(parsed as NpsInfoAttr).toHaveProperty("nps", nps);
});

test.each([
  ["tbhits 4", 4],
  ["tbhits    69.420", 69.42],
  ["tbhits\t-69.420", -69.42],
])("Given `%s`, should parse a `TbHitsInfoCommand`", (command, tbHits) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(TbHitsInfoAttr);
  expect(parsed as TbHitsInfoAttr).toHaveProperty("tbHits", tbHits);
});

test.each([
  ["sbhits 4", 4],
  ["sbhits    69.420", 69.42],
  ["sbhits\t-69.420", -69.42],
])("Given `%s`, should parse a `SbHitsInfoCommand`", (command, sbHits) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(SbHitsInfoAttr);
  expect(parsed as SbHitsInfoAttr).toHaveProperty("sbHits", sbHits);
});

test.each([
  ["cpuload 4", 4],
  ["cpuload    69.420", 69.42],
  ["cpuload\t-69.420", -69.42],
])("Given `%s`, should parse a `CpuLoadInfoCommand`", (command, cpuLoad) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(CpuLoadInfoAttr);
  expect(parsed as CpuLoadInfoAttr).toHaveProperty("cpuLoad", cpuLoad);
});

test.each([
  ["string this is a test", "this is a test"],
  ["string    this is a really long test", "this is a really long test"],
  ["string\tthis is a test with a\na newline", "this is a test with a\na newline"],
])("Given `%s`, should parse a `StringInfoCommand`", (command, string) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(StringInfoAttr);
  expect(parsed as StringInfoAttr).toHaveProperty("string", string);
});

test.each([
  ["pv e2e4 e7e5 e1g1 e7e8q", ["e2e4", "e7e5", "e1g1", "e7e8q"]],
  ["pv    e2e4 e7e5\te1g1", ["e2e4", "e7e5", "e1g1"]],
  ["pv\te2e4", ["e2e4"]],
])("Given `%s`, should parse a `PrincipalVariationInfoCommand`", (command, moves) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(PrincipalVariationInfoAttr);
  expect(parsed as PrincipalVariationInfoAttr).toHaveProperty("moves", moves);
});

test.each([
  ["multipv 4", 4],
  ["multipv    69.420", 69.42],
  ["multipv\t-69.420", -69.42],
])(
  "Given `%s`, should parse a `MultiPrincipalVariationInfoCommand`",
  (command, multiPv) => {
    const parsed = infoAttrParser.tryParse(command);

    expect(parsed).toBeInstanceOf(MultiPrincipalVariationInfoAttr);
    expect(parsed as MultiPrincipalVariationInfoAttr).toHaveProperty("multiPv", multiPv);
  }
);

test.each([
  ["refutation e2e4 e7e5 e1g1 e7e8q", ["e2e4", "e7e5", "e1g1", "e7e8q"]],
  ["refutation    e2e4 e7e5\te1g1", ["e2e4", "e7e5", "e1g1"]],
  ["refutation\te2e4", ["e2e4"]],
])("Given `%s`, should parse a `RefutationInfoCommand`", (command, moves) => {
  const parsed = infoAttrParser.tryParse(command);

  expect(parsed).toBeInstanceOf(RefutationInfoAttr);
  expect(parsed as RefutationInfoAttr).toHaveProperty("moves", moves);
});
