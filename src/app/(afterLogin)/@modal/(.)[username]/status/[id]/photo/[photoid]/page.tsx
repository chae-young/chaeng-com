import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/Comments";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/CommentForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ImageZone from "./_component/ImageZone";

interface Props {
    params: {
        id: string
    }
}
export default async function PhotoModal ({params}: Props) {
    const {id} = params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey: ['post', id],
      queryFn: getSinglePost
    })
    await queryClient.prefetchQuery({
      queryKey: ['post', id, 'comments'],
      queryFn: getComments
    })  
    const dehydratedState = dehydrate(queryClient);
  

    return (
    <HydrationBoundary state={dehydratedState}>
        <Dialog defaultOpen={true}>
            <DialogContent className="h-screen max-w-screen">
                <DialogHeader className="text-3xl">
                    <DialogTitle>포토 상세보기</DialogTitle>
                </DialogHeader>
                <div className="flex">
                    <ImageZone id={id}/>
                    <div className="flex-1 h-screen overflow-y-auto">
                        <CommentForm/>
                        <div>
                            <SinglePost id={id} noImage/>
                            <Comments id={id}/>
                        </div>
                    </div>
                </div>                
            </DialogContent>
        </Dialog>      
    </HydrationBoundary>
    )
}