import idCommandParser from "./idCommandParser";

test.each([
  [
    "id name Stockfish [commit: 729b62d2, upstream: 237ed1ef, emscripten: 2.0.26]",
    "name",
    "Stockfish [commit: 729b62d2, upstream: 237ed1ef, emscripten: 2.0.26]",
  ],

  [
    "id author the Stockfish developers (see AUTHORS file)",
    "author",
    "the Stockfish developers (see AUTHORS file)",
  ],
])("Given `%s`, should parse a `IdCommand`", (command, kind, author) => {
  const result = idCommandParser.tryParse(command);

  expect(result.kind).toBe(kind);
  expect(result.value).toBe(author);
});

test.each(["id name", "id author", "id version"])(
  "Given `%s`, should fail to parse a `IdCommand`",
  (command) => {
    expect(() => idCommandParser.tryParse(command)).toThrow();
  }
);
