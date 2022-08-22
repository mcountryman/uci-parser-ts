import InfoAttr from "./InfoAttr";

export default class NodesSearchedInfoAttr extends InfoAttr {
  constructor(
    /** The number of nodes the engine has searched. */
    public readonly nodes: number
  ) {
    super();
  }
}
