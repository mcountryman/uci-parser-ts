import parser from "./parse/parser";

/**
 * Parses a single UCI command.
 *
 * @example
 * ```
 * import { expect } from "vitest.js"
 * import parseOne from "uci-parser-ts/parseOne.js"
 * import BestMoveCommand from "uci-parser-ts/commands/client/BestMoveCommand.js"
 *
 * const command = parseOne("bestmove e2e4 ponder e7e5");
 *
 * expect(command).toBeInstanceOf(BestMoveCommand);
 * expect(command.move).toBe("e2e4");
 * expect(command.ponder).toBe("e7e5");
 * ```
 *
 * @param command - The command to parse.
 * @throws {@link Error} If the command is not valid UCI.
 * @returns The parsed command.
 */
export default function parseOne(command: string) {
  return parser.tryParse(command);
}
