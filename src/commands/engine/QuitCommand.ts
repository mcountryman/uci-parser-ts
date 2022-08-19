import EngineCommand from "../EngineCommand";

/**
 * The command that tells the engine to quit the program as soon as possible.
 */
export default class QuitCommand extends EngineCommand {
  public serialize(): string {
    return "quit";
  }
}
