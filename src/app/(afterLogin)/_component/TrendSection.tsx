'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Trend from "./Trend";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { getTrends } from "../_lib/getTrends";
import { HashTag } from "@/model/HashTag";

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  const { data } = useQuery<HashTag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user
  })  


  if(pathname === '/explore') return null;
  if(!session?.user) return <>트렌드를 가져올수 없습니다.</>;

  return (
      <Card
      className="" x-chunk="dashboard-05-chunk-0"
    >
      <CardHeader className="pb-3">
        <CardTitle>나를 위한 트렌드</CardTitle>
      </CardHeader>
      <CardContent>
        {data?.map((trend) => (
          <Trend key={trend.tagId} trend={trend} />
        ))}
      </CardContent>
    </Card>
  )
}