import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import 'dayjs/locale/ko';
import ActionButton from "../../_component/ActionButton";
import PostArticle from "./PostArticle";
import { faker} from '@faker-js/faker';

dayjs.locale('ko');

export default function Post() {
    const target = {
        postId: 1,
        User: {
            id: 1,
            nickname: 'shadcn',
            image: ''
        },
        content: 'dsfdfsdfsd',
        createdAt: new Date(),
        images: [] as unknown as {imageId: number, link: string}[],
    }

    if(Math.random() > 0.5) {
        target.images.push({
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
        })
    }
    return(
        <PostArticle post={target}>
            <CardHeader>
                <CardTitle>
                    <Link href={`/${target.User.id}`}>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>
                        <div>{target.User.nickname}</div>
                    </Link>
                    <CardDescription>
                        {dayjs(target.createdAt).fromNow(true)}
                    </CardDescription>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {target.images && target.images.length > 0 && (
                    <Link href={`/${target.User.id}/status/${target.postId}/photo/${target.images[0].imageId}`}>
                        <img src={target.images[0].link} alt=""/>
                    </Link>
                )}
            </CardContent>
            <CardFooter>
                <ActionButton/>
            </CardFooter>
        </PostArticle>
    )
}