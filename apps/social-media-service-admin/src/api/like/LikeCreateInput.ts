import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type LikeCreateInput = {
  author?: string | null;
  post?: PostWhereUniqueInput | null;
};
