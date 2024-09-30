'use client';

import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode,
    post: {
        postId: number,
        User: {
            id: number,
            nickname: string,
            image: string,
        },
        content: string,
        createdAt: Date,
        images: unknown,
    }
}

export default function PostArticle({children, post}: Props) {
    const router = useRouter();
    const handleClick = () => {
        console.log('ddfsdF?')
        router.push(`/${post.User.id}/status/${post.postId}`);
    }

    return <Card onClickCapture={handleClick}>{children}</Card>
}