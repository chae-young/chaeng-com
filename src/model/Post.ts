import { PostImage } from "./PostImage";
import { User } from "./User";

export interface PostType {
    postId: number;
    User: User,
    content: string;
    createdAt: Date;
    Images: PostImage[];
}