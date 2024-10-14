'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getFollowRecommends } from "../_lib/getFollowRecommends";
import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";

export default function FollowRecommended() {
    const { data } = useQuery<User[]>({
        queryKey: ['users', 'followRecommends'],
        queryFn: getFollowRecommends,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
      })  
    
    return (
        <>
        {data?.map((user) => 
            <li className="flex flex-wrap items-center gap-2" key={user.id}>
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src={user.image} alt={user.nickname} />
                        <AvatarFallback>{user.nickname}</AvatarFallback>                    
                    </Avatar>
                </div>
                <Button>팔로우</Button>
            </li>
        )}
        </>
    )
};   