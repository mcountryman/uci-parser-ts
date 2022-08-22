import EngineCommand from "./EngineCommand";

/**
 * The command that tells the engine to stop calculating as soon as possible.
 */
export default class StopCommand extends EngineCommand {
  public serialize(): string {
    return "stop";
  }
}
