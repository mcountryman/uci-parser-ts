import { UciMove } from "./types";
import InfoAttr from "./InfoAttr";

export default class RefutationInfoAttr extends InfoAttr {
  constructor(
    /** The refutation move list. */
    public readonly moves: UciMove[]
  ) {
    super();
  }
}
