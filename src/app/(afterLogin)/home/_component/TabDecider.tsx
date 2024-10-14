import PostRecommends from "./PostRecommends";
import { TabsContent } from "@/components/ui/tabs";

export default function TabDecider() {
    return (
        <TabsContent value={'col'}><PostRecommends/></TabsContent>
        
    )
}