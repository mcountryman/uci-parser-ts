import { alt, string } from "parsimmon";

/** Parses a boolean from string input into a {@link boolean}. */
export default alt(
  string("true").map(() => true),
  string("false").map(() => false)
).desc("boolean");
