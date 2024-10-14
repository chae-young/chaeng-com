import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPosts";
import UserInfo from "./_component/UserInfo";
import UserPosts from "./_component/UserPosts";


interface Props {
  params: { username: string }
}

export default async function Profile( {params} : Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  })
  await queryClient.prefetchQuery({
    queryKey: ['posts','users', username],
    queryFn: getUserPosts,
  })

  const dehydratedState = dehydrate(queryClient);

  return <>
      <HydrationBoundary state={dehydratedState}>
        <div className="flex">
          <UserInfo username={username}/>
          {/* <BackButton/>
          <h2>게시하기</h2> */}
        </div>
        {/* <CommentForm/> */}
        <div>
          <UserPosts username={username}/>
        </div>
      </HydrationBoundary>
  </>;
}
