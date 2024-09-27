import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import 'dayjs/locale/ko';
import ActionButton from "../../_component/ActionButton";

dayjs.locale('ko');

export default function Post() {
    const target = {
        User: {
            id: 1
        },
        createdAt: new Date(),
    }
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    <Link href={`/${target.User.id}`}>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>
                        <div>dfsdfdsfsdf</div>
                    </Link>
                    <CardDescription>
                        {dayjs(target.createdAt).fromNow(true)}
                    </CardDescription>
                </CardTitle>
            </CardHeader>
            <CardContent>
                사진.
            </CardContent>
            <CardFooter>
                <ActionButton/>
            </CardFooter>
        </Card>
    )
}