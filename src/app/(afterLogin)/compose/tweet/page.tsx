import Home from "../../home/page";

type Props = {
  params: {
    username: string,
    id: string,
    photoId: string,
  }
}
export default function Page({params} : Props) {
  console.log(params)
  return (
    <>
      <Home/>
    </>
  );
}
