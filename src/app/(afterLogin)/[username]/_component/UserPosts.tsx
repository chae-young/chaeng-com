'use client';

import { QueryClient, useQuery } from "@tanstack/react-query";
import { PostType } from "@/model/Post";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "../../home/_component/Post";

interface Props {
    username: string;
}

export default function UserPosts( {username}: Props ) {
    const {data} = useQuery<PostType[], object, PostType[], [_1: string, _2: string, username: string]>({
        queryKey: ['posts','users', username],
        queryFn: getUserPosts,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000
    })
    const queryClient = new QueryClient();
    const user = queryClient.getQueryData(['users', username]);
    if(user) return data?.map((post) => <Post key={post.postId} post={post} />);
}