import CopyProtectionCommand from "../../CopyProtectionCommand";
import DepthInfoAttr from "../../info/DepthInfoAttr";
import MultiPrincipalVariationInfoAttr from "../../info/MultiPrincipalVariationInfoAttr";
import NodesSearchedInfoAttr from "../../info/NodesSearchedInfoAttr";
import NpsInfoAttr from "../../info/NpsInfoAttr";
import PrincipalVariationInfoAttr from "../../info/PrincipalVariationInfoAttr";
import ScoreInfoAttr from "../../info/ScoreInfoAttr";
import SelectiveDepthInfoAttr from "../../info/SelectiveDepthInfoAttr";
import StringInfoAttr from "../../info/StringInfoAttr";
import TbHitsInfoAttr from "../../info/TbHitsInfoAttr";
import TimeInfoAttr from "../../info/TimeInfoAttr";
import InfoCommand from "../../InfoCommand";
import RegistrationCommand from "../../RegistrationCommand";
import clientCommandParser from "./clientCommandParser";

test.each([
  ["registration ok", "ok"],
  ["registration error", "error"],
  ["registration checking", "checking"],
])("Given `%s`, should parse a `RegistrationCommand`", (command, state) => {
  const result = clientCommandParser.tryParse(command) as RegistrationCommand;

  expect(result).toBeInstanceOf(RegistrationCommand);
  expect(result.state).toBe(state);
});

test.each([
  ["copyprotection ok", "ok"],
  ["copyprotection error", "error"],
  ["copyprotection checking", "checking"],
])("Given `%s`, should parse a `CopyProtectionCommand`", (command, state) => {
  const result = clientCommandParser.tryParse(command) as CopyProtectionCommand;

  expect(result).toBeInstanceOf(CopyProtectionCommand);
  expect(result.state).toBe(state);
});

test.each(["copyprotection", "copyprotection no", "copyprotect nein"])(
  "Given `%s`, should fail to parse a `ClientCommand`",
  (command) => {
    expect(() => clientCommandParser.tryParse(command)).toThrow();
  }
);

test.each([
  [
    "info string NNUE evaluation using nn-26abeed38351.nnue enabled",
    [new StringInfoAttr("NNUE evaluation using nn-26abeed38351.nnue enabled")],
  ],
  [
    "info depth 2 seldepth 2 multipv 1 score cp 75 nodes 47 nps 11750 tbhits 0 time 4 pv d2d4 a7a6",
    [
      new DepthInfoAttr(2),
      new SelectiveDepthInfoAttr(2),
      new MultiPrincipalVariationInfoAttr(1),
      new ScoreInfoAttr(75),
      new NodesSearchedInfoAttr(47),
      new NpsInfoAttr(11750),
      new TbHitsInfoAttr(0),
      new TimeInfoAttr(4),
      new PrincipalVariationInfoAttr(["d2d4", "a7a6"]),
    ],
  ],
])("Given `%s`, should parse a `InfoCommand`", (command, attrs) => {
  const result = clientCommandParser.tryParse(command) as InfoCommand;

  expect(result).toBeInstanceOf(InfoCommand);
  expect(result.attributes).toEqual(attrs);
});

test.each([
  "info string NNUE evaluation using nn-26abeed38351.nnue enabled",
  "info depth 1 seldepth 1 multipv 1 score cp 25 nodes 20 nps 6666 tbhits 0 time 3 pv d2d4",
  "info depth 2 seldepth 2 multipv 1 score cp 75 nodes 47 nps 11750 tbhits 0 time 4 pv d2d4 a7a6",
  "info depth 3 seldepth 3 multipv 1 score cp 64 nodes 102 nps 25500 tbhits 0 time 4 pv e2e4 e7e6 d2d4",
  "info depth 4 seldepth 4 multipv 1 score cp 33 nodes 548 nps 109600 tbhits 0 time 5 pv g1f3 e7e6 d2d4 d7d5",
  "info depth 5 seldepth 5 multipv 1 score cp 45 nodes 821 nps 136833 tbhits 0 time 6 pv e2e4 c7c5 g1f3 e7e6",
  "info depth 6 seldepth 6 multipv 1 score cp 52 nodes 1172 nps 195333 tbhits 0 time 6 pv e2e4 c7c6 g1f3 d7d5 e4e5 c6c5",
  "info depth 7 seldepth 7 multipv 1 score cp 37 nodes 1800 nps 225000 tbhits 0 time 8 pv e2e4 c7c6 g1f3 d7d5 e4d5 c6d5 d2d4",
  "info depth 8 seldepth 9 multipv 1 score cp 81 nodes 2797 nps 310777 tbhits 0 time 9 pv e2e4 c7c5 g1f3 d7d5 e4d5 d8d5",
  "info depth 9 seldepth 11 multipv 1 score cp 81 nodes 6644 nps 369111 tbhits 0 time 18 pv e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e6",
  "info depth 10 seldepth 13 multipv 1 score cp 48 nodes 15324 nps 450705 tbhits 0 time 34 pv e2e4 c7c5 g1f3 b8c6 f1b5 d7d6 b5c6 b7c6 e1g1 e7e5 d2d3 g7g6",
  "info depth 11 seldepth 17 multipv 1 score cp 61 nodes 34323 nps 483422 tbhits 0 time 71 pv e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 b8c6 c1e3 g8f6",
  "info depth 12 seldepth 17 multipv 1 score cp 27 nodes 60375 nps 511652 tbhits 0 time 118 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 b1c3 g8f6 d2d4 c5d4 f3d4 g7g6",
  "info depth 13 seldepth 18 multipv 1 score cp 28 nodes 75325 nps 512414 tbhits 0 time 147 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 g7g6 c2c3 g8f6 f1e1 f8g7 d2d4 c5d4 c3d4",
  "info depth 14 seldepth 22 multipv 1 score cp 22 nodes 109840 nps 503853 tbhits 0 time 218 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 e7e6 c2c3 g8f6 f1e1 f8e7 d2d4 e8g8 d4d5",
  "info depth 15 seldepth 21 multipv 1 score cp 19 nodes 171070 nps 516827 tbhits 0 time 331 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 e7e6 f1e1 f8e7 c2c3 g8f6 d2d4 e8g8 c1f4",
  "info depth 16 seldepth 21 multipv 1 score cp 47 nodes 236877 nps 533506 tbhits 0 time 444 pv e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 b8c6 b1c3 g8f6 d4b3 g7g6 f2f3 c8e6 c1e3 f8g7 d1d2",
  "info depth 17 seldepth 24 multipv 1 score cp 30 nodes 480562 nps 520652 tbhits 0 time 923 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 g8f6 f1e1 e7e6 c2c3 f8e7 d2d4 e8g8 d4d5 e6d5 e4d5",
  "info depth 18 seldepth 24 multipv 1 score cp 32 nodes 513556 nps 522437 tbhits 0 time 983 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 e7e6 c2c3 b8c6 d2d4 d6d5 d4c5 d5e4 d1d7 e8d7 f3g5",
  "info depth 19 seldepth 23 multipv 1 score cp 40 nodes 676751 nps 520978 hashfull 306 tbhits 0 time 1299 pv e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 b8c6 f1e1 e7e6 d2d3 g8f6 c2c3 f8e7 d3d4 e8g8 d4d5 e6d5",
  "info depth 20 seldepth 27 multipv 1 score cp 49 nodes 1124830 nps 516213 hashfull 509 tbhits 0 time 2179 pv e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 c3e2 f8e7 c2c3 c7c5 h2h4 b8c6 h1h3 d8a5 c1d2 a5b6 g1f3 b6b2 a1b1",
  "info depth 21 currmove a2a4 currmovenumber 10",
])("Given `%s`, should parse an `InfoCommand`", (command) => {
  const result = clientCommandParser.tryParse(command);

  expect(result).toBeInstanceOf(InfoCommand);
});
