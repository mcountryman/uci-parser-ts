import parsimmon from "parsimmon";
import CopyProtectionCommand from "../../commands/client/CopyProtectionCommand";
import InfoCommand from "../../commands/client/InfoCommand";
import ReadyOkCommand from "../../commands/client/ReadyOkCommand";
import RegistrationCommand from "../../commands/client/RegistrationCommand";
import UciOkCommand from "../../commands/client/UciOkCommand";
import ClientCommand from "../../commands/ClientCommand";
import space from "../util/space";
import bestMoveCommandParser from "./bestMoveCommandParser";
import idCommandParser from "./idCommandParser";
import infoAttrParser from "./info/infoAttrParser";
import optionCommandParser from "./optionCommandParser";
import protectionState from "./util/protectionState";

const { alt, sepBy1, string } = parsimmon;

/** A {@link ClientCommand} parser. */
export default alt<ClientCommand>(
  string("uciok").map(() => new UciOkCommand()),
  string("readyok").map(() => new ReadyOkCommand()),

  string("registration")
    .skip(space)
    .then(protectionState)
    .map((state) => new RegistrationCommand(state)),

  string("copyprotection")
    .skip(space)
    .then(protectionState)
    .map((state) => new CopyProtectionCommand(state)),

  string("info")
    .skip(space)
    .then(sepBy1(infoAttrParser, space))
    .map((attrs) => new InfoCommand(attrs)),

  idCommandParser,
  optionCommandParser,
  bestMoveCommandParser
);
