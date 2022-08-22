import ClientCommand from "src/ClientCommand";
import clientCommandParser from "src/parse/client/clientCommandParser";

/**
 * Parses a single UCI {@link ClientCommand}.
 *
 * @example
 * ```
 * import { expect } from "vitest"
 * import parseOne from "uci-parser-ts/parseOne"
 * import BestMoveCommand from "uci-parser-ts/BestMoveCommand"
 *
 * const command = parseOne("bestmove e2e4 ponder e7e5");
 *
 * expect(command).toBeInstanceOf(BestMoveCommand);
 * expect(command.move).toBe("e2e4");
 * expect(command.ponder).toBe("e7e5");
 * ```
 *
 * @param command - The command to parse.
 * @throws {Error} If the command is not valid UCI.
 * @returns The parsed command.
 */
export default function parseOneClient(command: string): ClientCommand {
  return clientCommandParser.tryParse(command);
}
