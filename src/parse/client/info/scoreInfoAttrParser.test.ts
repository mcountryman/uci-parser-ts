import scoreInfoAttrParser from "./scoreInfoAttrParser";

test.each([
  ["score mate 1", undefined, 1, false, false],
  ["score cp 69.420", 69.42, undefined, false, false],
  ["score cp 69.420 lowerbound", 69.42, undefined, true, false],
  ["score cp 69.420 upperbound", 69.42, undefined, false, true],
  ["score cp 69.420 lowerbound upperbound", 69.42, undefined, true, true],
])(
  "Given `%s`, should parse `ScoreInfoCommand`",
  (command, centipawn, mate, lowerBound, upperBound) => {
    const result = scoreInfoAttrParser.tryParse(command);

    expect(result.mate).toBe(mate);
    expect(result.centipawn).toBe(centipawn);
    expect(result.lowerBound).toBe(lowerBound);
    expect(result.upperBound).toBe(upperBound);
  }
);

test.each(["score mate lowerbound", "score cp lowerbound"])(
  "Given `%s`, should fail to parse `ScoreInfoCommand`",
  (command) => {
    expect(() => scoreInfoAttrParser.tryParse(command)).toThrow();
  }
);
