const FILE_NAMES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
const RANK_NAMES = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
const PROMOTION_NAMES = ["q", "r", "b", "n"] as const;

type FileName = typeof FILE_NAMES[number];
type RankName = typeof RANK_NAMES[number];
type PromotionName = typeof PROMOTION_NAMES[number];

type Move = `${Square}${Square}`;
type Square = `${FileName}${RankName}`;

export type UciMove = `${Move}` | `${Move}${PromotionName}`;
export type ProtectionState = "ok" | "error" | "checking";
