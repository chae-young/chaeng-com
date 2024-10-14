'use client';

import { useQuery } from "@tanstack/react-query";
import { User } from "@/model/User";
import { getUser } from "../_lib/getUser";

interface Props {
    username: string;
}

export default function UserInfo( {username}: Props ) {
    const {data: user ,error} = useQuery<User, object, User, [_1: string, _2: string]>({
        queryKey: ['users', username],
        queryFn: getUser,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000
    })

    if(error) return (
        <div>계정이 존재하지 않음.</div>
    )

    return (
        <div>
            <div>{user?.nickname}</div>
        </div>
    )
}