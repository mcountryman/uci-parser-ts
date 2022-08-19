import InfoAttr from "./InfoAttr";

export default class NpsInfoAttr extends InfoAttr {
  constructor(
    /** The number of nodes per second. */
    public readonly nps: number
  ) {
    super();
  }
}
