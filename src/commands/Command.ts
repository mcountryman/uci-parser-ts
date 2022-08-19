/** A UCI command. */
export default abstract class Command {
  /**
   * Gets the value indicating whether the command should be sent to the engine or the GUI.
   */
  public abstract get isEngineCommand(): boolean;
}
