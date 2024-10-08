'use client';

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "./Post";
import { PostType } from "@/model/Post";

export default function PostRecommends() {
    const {data} = useQuery<PostType[]>({
        queryKey: ['posts','recommends'],
        queryFn: getPostRecommends
    })

    return data?.map((post) => <Post key={post.postId} post={post} />);
}