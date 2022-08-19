import EngineCommand from "../EngineCommand";

/**
 * The command that tells the engine to enable or disable debug mode.
 */
export default class DebugCommand extends EngineCommand {
  constructor(
    /** The value indicating whether debug mode is on or not. */
    public readonly on: boolean
  ) {
    super();
  }

  public serialize(): string {
    return this.on ? "debug on" : "debug off";
  }
}
