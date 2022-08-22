import p from "parsimmon";

/** Parses everything until EOS. */
export default p.takeWhile(() => true);
