import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import SinglePost from "./_component/SinglePost";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";
import CommentForm from "./CommentForm";


interface Props {
  params: { id: string }
}

export default async function SinglePostPage( {params} : Props) {
  const {id} = params;
  // 서버 데이터 받아오기
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
    <section>
      <HydrationBoundary state={dehydratedState}>
        <SinglePost id={id} />
        
        <CommentForm id={id} />
      </HydrationBoundary>
    </section>
  )
}
