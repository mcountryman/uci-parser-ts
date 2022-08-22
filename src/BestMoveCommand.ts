import { UciMove } from "./types";
import ClientCommand from "./ClientCommand";

export default class BestMoveCommand extends ClientCommand {
  constructor(
    /** The best move. */
    public readonly move: UciMove,
    /** The ponder move. */
    public readonly ponder?: string
  ) {
    super();
  }
}
