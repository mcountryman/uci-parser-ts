import parsimmon from "parsimmon";
import IdCommand from "../../IdCommand";
import rest from "../util/rest";
import space from "../util/space";

const { alt, seq, string } = parsimmon;

/** A {@link Parser} for the {@link IdCommand}. */
export default alt(
  seq(string("id"), space, alt(string("name"), string("author")), space, rest).map(
    ([, , kind, , name]) => new IdCommand(kind, name)
  )
);
