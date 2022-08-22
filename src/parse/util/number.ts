import p from "parsimmon";

/** Parses a number from string input into a {@link number}. */
export default p
  .regexp(/-?(0|[1-9][0-9]*)([.][0-9]+)?([eE][+-]?[0-9]+)?/)
  .map(Number)
  .desc("number");
