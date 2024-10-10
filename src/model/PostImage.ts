import { PostType } from "./Post";

export interface PostImage{
    link: string;
    imageId: number;
    Post?: PostType;
}