import InfoAttr from "./InfoAttr";

export default class DepthInfoAttr extends InfoAttr {
  constructor(
    /** The search depth in plies. */
    public readonly depth: number
  ) {
    super();
  }
}
