import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
