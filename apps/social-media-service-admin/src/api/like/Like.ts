import { Post } from "../post/Post";

export type Like = {
  author: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
};
