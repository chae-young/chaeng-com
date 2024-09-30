import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/CommentForm";
import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import Post from "@/app/(afterLogin)/home/_component/Post";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { faker } from "@faker-js/faker";

export default function PhotoModal () {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text(),
        }
    }
    return (
        <Dialog defaultOpen={true}>
        <DialogContent>
            <DialogHeader className="text-3xl">
                <DialogTitle>로그인</DialogTitle>
            </DialogHeader>                
            <div>
                <img src={photo.link} alt=""/>
                <ActionButton/>
            </div>
            <div>
                <CommentForm/>
                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </DialogContent>
    </Dialog>      
    )
}