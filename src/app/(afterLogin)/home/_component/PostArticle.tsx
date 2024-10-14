'use client';

import { Card } from "@/components/ui/card";
import { PostType } from "@/model/Post";
import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode,
    post: PostType
}

export default function PostArticle({children, post}: Props) {
    const router = useRouter();
    const handleClick = () => {
        console.log('ddfsdF?')
        router.push(`/${post.User.id}/status/${post.postId}`);
    }

    return <Card onClickCapture={handleClick}>{children}</Card>
}