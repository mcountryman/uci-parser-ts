import Command from "./Command";

/** A client UCI command. */
export default abstract class ClientCommand extends Command {
  public get isEngineCommand(): boolean {
    return true;
  }
}
