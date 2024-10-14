'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { HashTag } from "@/model/HashTag";
import { getTrends } from "../../_lib/getTrends";
import Trend from "../../_component/Trend";

export default function TrendSection() {
  const { data } = useQuery<HashTag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })  

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