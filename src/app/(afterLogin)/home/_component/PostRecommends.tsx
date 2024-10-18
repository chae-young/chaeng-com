'use client';

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "./Post";
import { PostType } from "@/model/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PostRecommends() {
    const {data, fetchNextPage, hasNextPage, isFetching, isPending, isError} = useInfiniteQuery<PostType[], object, InfiniteData<PostType[]>, [_1: string, _2: string], number> ({
        queryKey: ['posts','recommends'],
        queryFn: getPostRecommends,
        initialPageParam: 0,
        getNextPageParam: (lastPage: PostType[]) => lastPage.at(-1)?.postId,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000
    })
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    },[fetchNextPage, inView, isFetching, hasNextPage])



    return (
        <>
            {data?.pages.map((page,index) => 
                <>
                    <Fragment key={index}>{page.map((post) => <Post key={post.postId} post={post} />)}</Fragment>
                    <div ref={ref} className="h-10"></div>
                </>
            )}
        </>
    )
}