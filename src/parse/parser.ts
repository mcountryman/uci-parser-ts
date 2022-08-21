import { alt } from "parsimmon";
import Command from "../commands/Command";
import clientCommandParser from "./client/clientCommandParser";

/**
 * A {@link Command} parser.
 *
 * @examples
 *
 * > Parse the principal variation attribute from an info command
 * ```
 * import { parser, InfoCommand, PrincipalVariationInfoAttr } from "uci-parser-ts";
 *
 * function* getUciLines(): Iterator<string> {
 *   // ...
 * }
 *
 * for (const line of getUciLines()) {
 *   try {
 *     const command = parser.tryParse(line);
 *     if (command instanceof InfoCommand) {
 *       for (const attr of command.attributes) {
 *         if (attr instanceof PrincipalVariationInfoAttr) {
 *           console.log(attr.moves);
 *         }
 *       }
 *     }
 *   } catch (err) {
 *     // it is usually best to ignore invalid UCI commands.
 *   }
 * }
 *
 * ```
 */
export default alt<Command>(clientCommandParser);
