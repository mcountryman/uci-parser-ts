import ClientCommand from "../ClientCommand";

/**
 * The command that indicates the engine is ready to accept new commands.
 *
 * @remarks
 *
 * This command is sent after the engine has received the {@link IsReadyCommand}.
 */
export default class ReadyOkCommand extends ClientCommand {}
