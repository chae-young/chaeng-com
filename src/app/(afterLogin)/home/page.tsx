import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Post from "./_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import { getPostRecommends } from "./_lib/getPostRecommends";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommend'],
    queryFn: getPostRecommends
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Tab/>
      <PostForm />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </HydrationBoundary>
  );
}
