import { PostType } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

export const getSinglePost: QueryFunction<PostType, [_1: string, _2: string]> = async ({queryKey}) => {
    const [_1, id] = queryKey
    const res = await fetch(`http://localhost:9090/api/posts/${id}`, {
      next: {
        tags: ['posts', id],
      },
      cache: 'no-store'
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  