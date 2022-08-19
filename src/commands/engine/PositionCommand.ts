import { UciMove } from "../../types";
import EngineCommand from "../EngineCommand";

/**
 * The command that tells the engine to set up the position described in the fenstring
 * on the internal board and play the moves on the internal chess board.
 *
 * @remarks
 * If this position is from a different game than the last position sent to the engine the
 * GUI should have sent a {@link UciNewGameCommand} inbetween.
 */
export default class PositionCommand extends EngineCommand {
  constructor(
    /**
     * The [FEN format](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
     * representation of the chess position.
     *
     * @remarks
     * If the FEN string is undefined the engine should assume the starting position from
     * the list of moves.
     */
    public readonly fen: string | undefined,
    /** A list of moves to apply to the position. */
    public readonly moves: UciMove[]
  ) {
    super();
  }

  public serialize(): string {
    return `position ${this.fen ?? "startpos"} moves ${this.moves.join(" ")}`;
  }
}
