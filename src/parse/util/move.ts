import p from "parsimmon";
import { UciMove } from "../../types";

/** Parses a UCI move. */
export default p.regexp(/[a-h][1-8][a-h][1-8][qrbn]?/).map((move) => move as UciMove);
