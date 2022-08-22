import p from "parsimmon";
import Command from "../commands/Command";
import clientCommandParser from "./client/clientCommandParser";

/**
 * A {@link Command} parser.
 *
 * @examples
 *
 * > Parse the principal variation attribute from an info command
 * ```
 * import parser from "uci-parser-ts/parse/parser.js"
 * import InfoCommand from "uci-parser-ts/commands/client/InfoCommand.js"
 * import PrincipalVariationAttribute from "uci-parser-ts/commands/client/info/PrincipalVariationAttribute.js"
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
export default p.alt<Command>(clientCommandParser);
