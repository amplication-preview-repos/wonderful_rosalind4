import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutPostsInput;
};
