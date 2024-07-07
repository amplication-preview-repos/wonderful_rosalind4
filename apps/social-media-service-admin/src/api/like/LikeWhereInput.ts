import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type LikeWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
