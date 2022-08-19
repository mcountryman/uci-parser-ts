import { Parser, seqMap, string } from "parsimmon";
import space from "./space";

/**
 * Parses a pair delimited by the {@link space} parser.
 *
 * @param name - The first token of the pair.
 * @param parser - The second parser.
 * @param f - The map function.
 * @returns A parser.
 */
export default function spaceDelim<T, TArg>(
  name: string,
  parser: Parser<TArg>,
  f: (n: TArg) => T
) {
  return seqMap(string(name), space, parser, (_, __, arg) => f(arg));
}
