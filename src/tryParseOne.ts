import Command from "./Command";
import parseOne from "./parseOne";

/**
 * Parses a single UCI command.
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
export default function tryParseOne(command: string): Command | null {
  try {
    return parseOne(command);
  } catch {
    return null;
  }
}
