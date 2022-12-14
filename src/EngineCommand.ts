import Command from "./Command";

/** An engine UCI command. */
export default abstract class EngineCommand extends Command {
  /**
   * Serializes the command into a string.
   *
   * @returns The serialized command.
   */
  public abstract serialize(): string;
}
