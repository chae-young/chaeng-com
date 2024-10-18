'use client'

import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton"
import { PostType } from "@/model/Post";
import { useQuery } from "@tanstack/react-query";

interface Props {
    id: string;
}
export default function ImageZone({id}: Props) {
    const {data: post} = useQuery<PostType, object, PostType, [_1: string, _2: string]>({
        queryKey: ['post', id,],
        queryFn: getSinglePost,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    })    
    return (
        <div className="flex-[2_2_0%] h-screen">
            <img src={post?.Images[0].link} alt={post?.content} className="w-full h-[80%] object-contain"/>
            <ActionButton/>
        </div>
    )
}