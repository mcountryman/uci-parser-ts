import { regexp } from "parsimmon";

/** Parses non-line breaking whitespace. */
export default regexp(/[ \t]+/);
