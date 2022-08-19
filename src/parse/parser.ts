import { alt } from "parsimmon";
import Command from "../commands/Command";
import clientCommandParser from "./client/clientCommandParser";

/** A {@link Command} parser. */
export default alt<Command>(clientCommandParser);
