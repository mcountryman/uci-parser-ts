import InfoAttr from "./InfoAttr";

export default class SelectiveDepthInfoAttr extends InfoAttr {
  constructor(
    /** The selective search depth in plies. */
    public readonly depth: number
  ) {
    super();
  }
}
