import { Button } from "@/components/ui/button";
import { Heart, MessageCircle,Repeat2 }from "lucide-react";

export default function ActionButton() {
    return (
        <div>
            <Button variant="outline"><MessageCircle /></Button>
            <Button variant="outline"><Repeat2 /></Button>
            <Button variant="outline"><Heart /></Button>
        </div>
    )
}