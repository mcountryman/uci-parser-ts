import ClientCommand from "../ClientCommand";

/**
 * The command that describes the engine identity.
 */

export default class IdCommand extends ClientCommand {
  constructor(
    /** The identity kind. */
    public readonly kind: "name" | "author",
    /** The identity value. */
    public readonly value: string
  ) {
    super();
  }
}
