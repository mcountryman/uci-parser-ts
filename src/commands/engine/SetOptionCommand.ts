import EngineCommand from "../EngineCommand";

/**
 * The command that tells the engine to change an option with the given name and value.
 */
export default class SetOptionCommand extends EngineCommand {
  constructor(
    /** The name of the option to set. */
    public readonly name: string,
    /** The value of the option to set. */
    public readonly value: string
  ) {
    super();
  }

  public serialize(): string {
    return `setoption name ${this.name} value ${this.value}`;
  }
}
