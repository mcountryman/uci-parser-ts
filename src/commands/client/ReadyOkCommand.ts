import ClientCommand from "../ClientCommand";

/**
 * The command that indicates the engine is ready to accept new commands.
 *
 * @remarks
 *
 * This command is sent after the engine has received the {@link ReadyCommand}.
 */

export default class ReadyOkCommand extends ClientCommand {}
