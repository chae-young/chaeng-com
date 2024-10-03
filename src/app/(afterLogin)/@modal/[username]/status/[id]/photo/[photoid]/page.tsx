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
        <DialogContent className="h-screen max-w-screen">
            <DialogHeader className="text-3xl">
                <DialogTitle>로그인</DialogTitle>
            </DialogHeader>
            <div className="flex">
                <div className="flex-[2_2_0%] h-screen">
                    <img src={photo.link} alt="" className="w-full h-[80%] object-contain"/>
                    <ActionButton/>
                </div>
                <div className="flex-1 h-screen overflow-y-auto">
                    <Post noImage/>
                    <CommentForm/>
                    <div>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                </div>
            </div>                
        </DialogContent>
    </Dialog>      
    )
}