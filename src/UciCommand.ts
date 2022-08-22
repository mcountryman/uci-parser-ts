import EngineCommand from "./EngineCommand";

/**
 * The command that tells teh engine to use the UCI protocol.  The engine will respond
 * with an {@link IdCommand} followed by a {@link OptionCommand} for each option, and
 * finally a {@link UciOkCommand} to aknowledge the UCI mode.
 */
export default class UciCommand extends EngineCommand {
  public serialize(): string {
    return "uci";
  }
}
