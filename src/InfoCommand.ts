import ClientCommand from "./ClientCommand";
import InfoAttr from "./info/InfoAttr";

export default class InfoCommand extends ClientCommand {
  constructor(
    /** The info attributes. */
    public readonly attributes: ReadonlyArray<InfoAttr>
  ) {
    super();
  }
}
