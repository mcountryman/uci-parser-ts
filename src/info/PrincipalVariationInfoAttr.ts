import { UciMove } from "../types";
import InfoAttr from "./InfoAttr";

export default class PrincipalVariationInfoAttr extends InfoAttr {
  constructor(
    /** The principal variation. */
    public readonly moves: UciMove[]
  ) {
    super();
  }
}
