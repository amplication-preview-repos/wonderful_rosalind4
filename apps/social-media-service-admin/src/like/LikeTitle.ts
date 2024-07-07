import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "author";

export const LikeTitle = (record: TLike): string => {
  return record.author?.toString() || String(record.id);
};
