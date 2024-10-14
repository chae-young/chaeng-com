'use client';

import { PostType } from "@/model/Post";
import { useQuery } from "@tanstack/react-query";
import Post from "../../home/_component/Post";
import { getSearchResult } from "../_lib/getSearchResult";

interface Props {
    searchParams: { q: string, f?: string, pf?: string };
}

export default function SearchResult({ searchParams }: Props) {
    // 쿼리키가 다이나믹 할때는 타입을 4번째에 등록
    const {data} = useQuery<PostType[], object, PostType[], [_1: string, _2: string, Props['searchParams']]>({
        queryKey: ['post', 'searchResult', searchParams],
        queryFn: getSearchResult,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000
    })
    
    return data?.map((post) => <Post key={post.postId} post={post} />);
}