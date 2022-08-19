import Command from "../commands/Command";
import parser from "./parser";

export default function parseOne(line: string): Command {
  return parser.tryParse(line);
}
