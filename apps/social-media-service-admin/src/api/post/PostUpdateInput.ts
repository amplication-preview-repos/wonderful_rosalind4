import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutPostsInput;
};
