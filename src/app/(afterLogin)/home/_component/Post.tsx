import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import 'dayjs/locale/ko';
import ActionButton from "../../_component/ActionButton";
import PostArticle from "./PostArticle";
import PhotoImages from "./PhotoImages";
import { PostType } from "@/model/Post";

dayjs.locale('ko');

interface Props {
    noImage?: boolean;
    post: PostType;
}

export default function Post({noImage, post}: Props) {
    const target = post;
    console.log(target)
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
                <PhotoImages post={target}/>
            </CardContent>
            <CardFooter>
                <ActionButton/>
            </CardFooter>
        </PostArticle>
    )
}