'use client';

import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/model/Post";
import Post from "@/app/(afterLogin)/home/_component/Post";
import { getSinglePost } from "../_lib/getSinglePost";

interface Props {
    id: string;
    noImage?: boolean;
}

export default function SinglePost({id, noImage}: Props ) {
    const {data: post, error} = useQuery<PostType, object, PostType, [_1: string, _2: string]>({
        queryKey: ['post', id],
        queryFn: getSinglePost,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    })
    if(error) return <div>게시글을 찾을 수 없습니다</div>
    if(!post) return <div>로딩즁..</div>

    return <Post key={post.postId} post={post} noImage={noImage}/>;
}