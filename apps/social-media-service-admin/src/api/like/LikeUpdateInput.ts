import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type LikeUpdateInput = {
  author?: string | null;
  post?: PostWhereUniqueInput | null;
};
