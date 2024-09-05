import { Post } from './posts';

export type User = {
  intra: string;
  profileImg: string;
  profileDescription: string;
  userPosts: Post[];
};
