import InfoAttr from "./InfoAttr";

export default class CpuLoadInfoAttr extends InfoAttr {
  constructor(
    /** The CPU load in permills. */
    public readonly cpuLoad: number
  ) {
    super();
  }
}
