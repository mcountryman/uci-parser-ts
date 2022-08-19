import InfoAttr from "./InfoAttr";

export default class SbHitsInfoAttr extends InfoAttr {
  constructor(
    /** The number of shredder-specific tablebase hits. */
    public readonly sbHits: number
  ) {
    super();
  }
}
