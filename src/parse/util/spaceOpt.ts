import { regexp } from "parsimmon";

/** Parses zero or more non-line breaking whitespace characters. */
export default regexp(/[ \t]*/);
