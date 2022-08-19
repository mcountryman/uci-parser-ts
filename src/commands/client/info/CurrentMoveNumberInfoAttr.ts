import InfoAttr from "./InfoAttr";

export default class CurrentMoveNumberInfoAttr extends InfoAttr {
  constructor(
    /** The current move number. */
    public readonly moveNumber: number
  ) {
    super();
  }
}
