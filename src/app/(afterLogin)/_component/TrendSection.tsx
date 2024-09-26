import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Trend from "./Trend";

export default function TrendSection() {
    return (
        <Card
        className="" x-chunk="dashboard-05-chunk-0"
      >
        <CardHeader className="pb-3">
          <CardTitle>나를 위한 트렌드</CardTitle>
        </CardHeader>
        <CardContent>
            <Trend />
        </CardContent>
      </Card>
    )
}