import { PostType } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

export const getComments: QueryFunction<PostType[], [_1: string, _2: string, _3:string]> = async ({queryKey}) => {
    const [_1, id, _3] = queryKey
    const res = await fetch(`http://localhost:9090/api/posts/${id}/comments`, {
      next: {
        tags: ['posts', id, 'comments'],
      },
      cache: 'no-store'
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  