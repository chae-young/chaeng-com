'use client';

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PostType } from "@/model/Post";
import Post from "@/app/(afterLogin)/home/_component/Post";
import { getComments } from "../_lib/getComments";

interface Props {
    id: string;
}

export default function Comments({id}: Props ) {
    const queryClient = useQueryClient();
    const post = queryClient.getQueryData(['post', id]);

    const {data: posts} = useQuery<PostType[], object, PostType[], [_1: string, _2: string, _3: string]>({
        queryKey: ['post', id, 'comments'],
        queryFn: getComments,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
        enabled: !!post
    })

    if(post) return posts?.map((post) => <Post key={post.postId} post={post} />);
    return null;
}