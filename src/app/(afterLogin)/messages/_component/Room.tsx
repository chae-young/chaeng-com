'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function Room() {
    const router = useRouter();
    const user = {
        id: 'hrro',
        nickname: '김영웅',
        Messages: [
            {roomId: 1, content: '안녕하이룽방가방가??', createdAt: new Date()},
            {roomId: 2,content: 'dmd qkdrkqkdrk~~', createdAt: new Date()},
        ]
    }
    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    }

    return (
        <Card onClickCapture={onClick}>
            <CardHeader className="flex">
                <Avatar>
                    <AvatarImage src={faker.image.avatar()} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>{user.nickname} @{user.id}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{user.Messages.at(-1)?.content}</p>
                <div>{dayjs(user.Messages.at(-1)?.createdAt).fromNow(true)}</div>
            </CardContent>
        </Card>
    )
}