import EngineCommand from "../EngineCommand";

/**
 * The command that tells the engine that a next search will be from a different game.
 *
 * @remarks
 * If the GUI hasn't sent a "ucinewgame" before the first "position" command, the engine
 * shouldn't expect any further ucinewgame commands as the GUI is probably not supporting
 * the ucinewgame command. So the engine should not rely on this command even though all
 * new GUIs should support it. As the engine's reaction to "ucinewgame" can take some time
 * the GUI should always send "isready" after "ucinewgame" to wait for the engine to
 * finish its operation.
 */
export default class UciNewGameCommand extends EngineCommand {
  public serialize(): string {
    return "ucinewgame";
  }
}
