import optionCommandParser from "./optionCommandParser";

test.each([
  [
    "option name nameo type string default test",
    "nameo",
    "string",
    "test",
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name this is a name type check default false",
    "this is a name",
    "check",
    false,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name spinny type spin default 69420 min 0 max 100000",
    "spinny",
    "spin",
    69420,
    0,
    100000,
    undefined,
  ],

  [
    "option name COMBO type combo default Yes var Yes var No var Maybe",
    "COMBO",
    "combo",
    "Yes",
    undefined,
    undefined,
    ["Yes", "No", "Maybe"],
  ],

  [
    "option name Debug Log File type string default ",
    "Debug Log File",
    "string",
    "",
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name Threads type spin default 1 min 1 max 512",
    "Threads",
    "spin",
    1,
    1,
    512,
    undefined,
  ],

  [
    "option name Hash type spin default 16 min 1 max 33554432",
    "Hash",
    "spin",
    16,
    1,
    33554432,
    undefined,
  ],

  [
    "option name Clear Hash type button",
    "Clear Hash",
    "button",
    undefined,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name Ponder type check default false",
    "Ponder",
    "check",
    false,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name MultiPV type spin default 1 min 1 max 500",
    "MultiPV",
    "spin",
    1,
    1,
    500,
    undefined,
  ],

  [
    "option name Skill Level type spin default 20 min 0 max 20",
    "Skill Level",
    "spin",
    20,
    0,
    20,
    undefined,
  ],

  [
    "option name Move Overhead type spin default 10 min 0 max 5000",
    "Move Overhead",
    "spin",
    10,
    0,
    5000,
    undefined,
  ],

  [
    "option name Slow Mover type spin default 100 min 10 max 1000",
    "Slow Mover",
    "spin",
    100,
    10,
    1000,
    undefined,
  ],

  [
    "option name nodestime type spin default 0 min 0 max 10000",
    "nodestime",
    "spin",
    0,
    0,
    10000,
    undefined,
  ],

  [
    "option name UCI_Chess960 type check default false",
    "UCI_Chess960",
    "check",
    false,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name UCI_AnalyseMode type check default false",
    "UCI_AnalyseMode",
    "check",
    false,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name UCI_LimitStrength type check default false",
    "UCI_LimitStrength",
    "check",
    false,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name UCI_Elo type spin default 1350 min 1350 max 2850",
    "UCI_Elo",
    "spin",
    1350,
    1350,
    2850,
    undefined,
  ],

  [
    "option name UCI_ShowWDL type check default false",
    "UCI_ShowWDL",
    "check",
    false,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name SyzygyPath type string default <empty>",
    "SyzygyPath",
    "string",
    "<empty>",
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name SyzygyProbeDepth type spin default 1 min 1 max 100",
    "SyzygyProbeDepth",
    "spin",
    1,
    1,
    100,
    undefined,
  ],

  [
    "option name Syzygy50MoveRule type check default true",
    "Syzygy50MoveRule",
    "check",
    true,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name SyzygyProbeLimit type spin default 7 min 0 max 7",
    "SyzygyProbeLimit",
    "spin",
    7,
    0,
    7,
    undefined,
  ],

  [
    "option name Use NNUE type check default true",
    "Use NNUE",
    "check",
    true,
    undefined,
    undefined,
    undefined,
  ],

  [
    "option name EvalFile type string default nn-26abeed38351.nnue",
    "EvalFile",
    "string",
    "nn-26abeed38351.nnue",
    undefined,
    undefined,
    undefined,
  ],
])(
  "Given `%s`, should parse `OptionCommand`",
  (command, name, kind, defaultValue, min, max, options) => {
    const result = optionCommandParser.tryParse(command);

    expect(result.name).toBe(name);
    expect(result.kind).toBe(kind);
    expect(result.min).toBe(min);
    expect(result.max).toBe(max);
    expect(result.options).toEqual(options);
    expect(result.defaultValue).toBe(defaultValue);
  }
);
