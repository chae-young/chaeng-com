import { PostType } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

export const getUserPosts: QueryFunction<PostType[], [_1: string, _2: string, username: string]> = async ({queryKey}) => {
    const [_1, _2, username] = queryKey
    const res = await fetch(`http://localhost:9090/api/users/${username}/posts`, {
      next: {
        tags: ['posts','users', username],
      },
      cache: 'no-store'
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  