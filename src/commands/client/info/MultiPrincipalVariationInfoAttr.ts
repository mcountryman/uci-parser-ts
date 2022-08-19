import InfoAttr from "./InfoAttr";

export default class MultiPrincipalVariationInfoAttr extends InfoAttr {
  constructor(
    /** The number of principal variations. */
    public readonly multiPv: number
  ) {
    super();
  }
}
