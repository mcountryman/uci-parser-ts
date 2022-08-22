import InfoAttr from "./InfoAttr";

export default class TimeInfoAttr extends InfoAttr {
  constructor(
    /** The time in milliseconds the engine has searched. */
    public readonly timeMs: number
  ) {
    super();
  }
}
