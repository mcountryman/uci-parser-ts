/** The chessboard file names. */
export const FILE_NAMES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

/** The chessboard rank names. */
export const RANK_NAMES = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

/** The promotion piece names. */
export const PROMOTION_NAMES = ["q", "r", "b", "n"] as const;

/** A chessboard file name. */
export type FileName = typeof FILE_NAMES[number];

/** A chessboard rank name. */
export type RankName = typeof RANK_NAMES[number];

/** A promotion piece name. */
export type PromotionName = typeof PROMOTION_NAMES[number];

/**  A [long algebraic notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)#Long_algebraic_notation) square. */
export type Square = `${FileName}${RankName}`;

/**
 * A [long algebraic notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)#Long_algebraic_notation) move.
 *
 * @example
 *
 * ```
 * const move: UciMove = "e2e4q";
 * ```
 */
export type UciMove = `${Square}${Square}` | `${Square}${Square}${PromotionName}`;

/**
 * A protection state.
 *
 * @remarks Used in {@link RegistrationCommand} and {@link CopyProtectionCommand}.
 */
export type ProtectionState = "ok" | "error" | "checking";
