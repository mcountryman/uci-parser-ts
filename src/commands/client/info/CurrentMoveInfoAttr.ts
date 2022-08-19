import { UciMove } from "../../../types";
import InfoAttr from "./InfoAttr";

export default class CurrentMoveInfoAttr extends InfoAttr {
  constructor(
    /** The current move. */
    public readonly move: UciMove
  ) {
    super();
  }
}
