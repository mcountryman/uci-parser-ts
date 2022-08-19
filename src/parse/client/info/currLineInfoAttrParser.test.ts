import currLineInfoAttrParser from "./currLineInfoAttrParser";

test.each([
  ["currline e2e4", [], ["e2e4"]],
  ["currline 1 e2e4", [1], ["e2e4"]],
  ["currline 1 2 3 69.420 e2e4 e4e2", [1, 2, 3, 69.42], ["e2e4", "e4e2"]],
])("Given `%s`, should parse `CurrLineInfoCommand`", (command, cpuIndices, moves) => {
  const result = currLineInfoAttrParser.tryParse(command);

  expect(result.moves).toStrictEqual(moves);
  expect(result.cpuIndices).toStrictEqual(cpuIndices);
});

test.each(["currline e2e4 1 2 3", "currline"])(
  "Given `%s`, should fail to parse `CurrLineInfoCommand`",
  (command) => {
    expect(() => currLineInfoAttrParser.tryParse(command)).toThrow();
  }
);
