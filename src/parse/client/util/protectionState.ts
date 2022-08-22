import parsimmon from "parsimmon";
import { ProtectionState } from "../../../types";

const { alt, string } = parsimmon;

/** A parser that parses a {@link ProtectionState} */
export default alt<ProtectionState>(
  string("ok").map(() => "ok" as const),
  string("error").map(() => "error" as const),
  string("checking").map(() => "checking" as const)
);
