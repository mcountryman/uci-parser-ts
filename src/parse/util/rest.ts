import { takeWhile } from "parsimmon";

/** Parses everything until EOS. */
export default takeWhile(() => true);
