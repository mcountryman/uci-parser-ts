import { seq, string } from "parsimmon";
import BestMoveCommand from "../../commands/client/BestMoveCommand";
import move from "../util/move";
import space from "../util/space";

/** A {@link Parser} for the {@link BestMoveCommand}. */
export default seq(
  string("bestmove"),
  space,
  move,
  seq(space, string("ponder"), space, move)
    .map(([, , , move]) => move)
    .fallback(undefined)
).map(([, , move, ponderMove]) => new BestMoveCommand(move, ponderMove));
