import InfoAttr from "./InfoAttr";

export default class ScoreInfoAttr extends InfoAttr {
  constructor(
    /** The score in centipawns. */
    public readonly centipawn?: number,
    /**
     * The number of moves until checkmate.  A negative value indicates the engine will be
     * checkmated.
     */
    public readonly mate?: number,
    /** The lower bound score. */
    public readonly lowerBound: boolean = false,
    /** The upper bound score. */
    public readonly upperBound: boolean = false
  ) {
    super();
  }
}
