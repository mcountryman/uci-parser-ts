import EngineCommand from "../EngineCommand";

/**
 * The command that tells the engine the user has played the expected move.
 *
 * @remarks
 * This will be sent if the engine was told to ponder on the same move the user has
 * played.  The engine should continue search but switch from pondering to normal search.
 */
export default class PonderHitCommand extends EngineCommand {
  public serialize(): string {
    return "ponderhit";
  }
}
