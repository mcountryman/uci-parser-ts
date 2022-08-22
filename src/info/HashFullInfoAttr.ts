import InfoAttr from "./InfoAttr";

export default class HashFullInfoAttr extends InfoAttr {
  constructor(
    /** The occupancy of hash entries used. */
    public readonly hashFull: number
  ) {
    super();
  }
}
