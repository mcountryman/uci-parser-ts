import InfoAttr from "./InfoAttr";

export default class TbHitsInfoAttr extends InfoAttr {
  constructor(
    /** The number of tablebase hits. */
    public readonly tbHits: number
  ) {
    super();
  }
}
