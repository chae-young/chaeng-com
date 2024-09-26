import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function FollowRecommended() {
    return (
        <li className="flex flex-wrap items-center gap-2">
            <div className="flex items-center">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>이건모에요</AvatarFallback>                    
                </Avatar>
            </div>
            <Button>팔로우</Button>
        </li>
    )
}