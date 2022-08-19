import { ProtectionState } from "../../types";
import ClientCommand from "../ClientCommand";

export default class CopyProtectionCommand extends ClientCommand {
  constructor(
    /** The copy protection state. */
    public readonly state: ProtectionState
  ) {
    super();
  }
}
