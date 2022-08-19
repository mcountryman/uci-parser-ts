import bestMoveCommandParser from "./bestMoveCommandParser";

test.each([
  ["bestmove a1b1q", "a1b1q", undefined],
  ["bestmove a1b1q ponder a1b1q", "a1b1q", "a1b1q"],
])("Given `%s`, should parse a `BestMoveCommand`", (command, move, ponder) => {
  const result = bestMoveCommandParser.tryParse(command);

  expect(result.move).toBe(move);
  expect(result.ponder).toBe(ponder);
});

test.each(["bestmove", "bestmove a1b1 pander", "bestmove a1b1 ponder"])(
  "Given `%s`, should fail to parse a `BestMoveCommand`",
  (command) => {
    expect(() => bestMoveCommandParser.tryParse(command)).toThrow();
  }
);
