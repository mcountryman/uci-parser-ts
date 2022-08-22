import ClientCommand from "./ClientCommand";
import parseOneClient from "./parseOneClient";

/**
 * Parses a single UCI {@link ClientCommand}.
 *
 * @example
 * ```
 * import { expect } from "vitest"
 * import tryParseOne from "uci-parser-ts/tryParseOne"
 * import BestMoveCommand from "uci-parser-ts/BestMoveCommand"
 *
 * const command = tryParseOne("bestmove e2e4 ponder e7e5");
 *
 * expect(command).toBeInstanceOf(BestMoveCommand);
 * expect(command.move).toBe("e2e4");
 * expect(command.ponder).toBe("e7e5");
 * ```
 *
 * @param command - The command to parse.
 * @returns The parsed command or `null` if the command is invalid..
 */
export default function tryParseOne(command: string): ClientCommand | null {
  try {
    return parseOneClient(command);
  } catch {
    return null;
  }
}
