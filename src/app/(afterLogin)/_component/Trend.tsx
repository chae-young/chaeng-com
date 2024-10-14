import { HashTag } from "@/model/HashTag";
import Link from "next/link";

interface Props {
    trend: HashTag;
}
export default function Trend({ trend }: Props) { 
    return (<Link href={`/search?q=${trend.title}`}>
        <div>실시간 트렌드</div>
        <div>{trend.title}</div>
        <div>{trend.count.toLocaleString()} posts</div>
    </Link>)
}