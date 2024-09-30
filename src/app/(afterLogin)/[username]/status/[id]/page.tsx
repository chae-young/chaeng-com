import BackButton from "@/components/BackButton";
import CommentForm from "./CommentForm";
import Post from "@/app/(afterLogin)/home/_component/Post";

export default function SinglePost() {
  return <>
    <div className="flex">
      <BackButton/>
      <h2>게시하기</h2>
    </div>
    <CommentForm/>
    <div>
      <Post/>
    </div>
  </>;
}
