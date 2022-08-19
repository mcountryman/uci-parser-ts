import { ProtectionState } from "../../types";
import ClientCommand from "../ClientCommand";

export default class RegistrationCommand extends ClientCommand {
  constructor(
    /** The registration protection state. */
    public readonly state: ProtectionState
  ) {
    super();
  }
}
