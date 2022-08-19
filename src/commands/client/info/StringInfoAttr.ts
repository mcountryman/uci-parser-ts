import InfoAttr from "./InfoAttr";

export default class StringInfoAttr extends InfoAttr {
  constructor(
    /** The string. */
    public readonly string: string
  ) {
    super();
  }
}
