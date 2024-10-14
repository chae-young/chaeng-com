import { PostType } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

// 쿼리키가 넘어간다..?
export const getSearchResult: QueryFunction<PostType[], [_1: string, _2: string, searchParams: { q: string, f?: string, pf?: string }]> = async ({ queryKey }) => {
    const [_1, _2, searchParams] = queryKey;
    const res = await fetch(`http://localhost:9090/api/search/${searchParams.q}?${searchParams.toString()}`, {
      next: {
        tags: ['posts','search', searchParams.q],
      },
      cache: 'no-store'
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  