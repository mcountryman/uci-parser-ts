import ClientCommand from "./ClientCommand";

/**
 * An `option` command sent from the server to describe an option, it's type, it's name
 * and it's default value.
 */
export default class OptionCommand extends ClientCommand {
  constructor(
    /** The option name. */
    public readonly name: string,
    /** The option type. */
    public readonly kind: "check" | "spin" | "combo" | "button" | "string",
    /** The minimum value. */
    public readonly min?: number,
    /** The maximum value. */
    public readonly max?: number,
    /** The `combo` options. */
    public readonly options?: string[],
    /** The default value. */
    public readonly defaultValue?: boolean | number | string
  ) {
    super();
  }
}
