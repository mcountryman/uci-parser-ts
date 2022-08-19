import EngineCommand from "../EngineCommand";

/**
 * The command that reqeusts the engine ready status.
 */
export default class IsReadyCommand extends EngineCommand {
  public serialize(): string {
    return "isready";
  }
}
