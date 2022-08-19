import { alt, string } from "parsimmon";
import { ProtectionState } from "../../../types";

/** A parser that parses a {@link ProtectionState} */
export default alt<ProtectionState>(
  string("ok").map(() => "ok" as const),
  string("error").map(() => "error" as const),
  string("checking").map(() => "checking" as const)
);
