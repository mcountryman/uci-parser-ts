import { UciMove } from "./types";
import InfoAttr from "./InfoAttr";

export default class CurrLineInfoAttr extends InfoAttr {
  constructor(
    /** The cpui number calculating this line. */
    public readonly cpuIndices: number[],
    /** The line being calculated. */
    public readonly moves: UciMove[]
  ) {
    super();
  }
}
