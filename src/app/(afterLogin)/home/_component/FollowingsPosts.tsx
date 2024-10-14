'use client';

import { useQuery } from "@tanstack/react-query";
import Post from "./Post";
import { PostType } from "@/model/Post";
import { getFollowingsPosts } from "../_lib/getFollowingsPosts";

export default function FollowingsPosts() {
    const {data} = useQuery<PostType[]>({
        queryKey: ['posts','followings'],
        queryFn: getFollowingsPosts,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000
    })

    return data?.map((post) => <Post key={post.postId} post={post} />);
}