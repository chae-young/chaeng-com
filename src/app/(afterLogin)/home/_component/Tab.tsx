import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tab() {
    return (
        <Tabs defaultValue="account" className="">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">팔로우</TabsTrigger>
                <TabsTrigger value="password">팔로잉</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
            </TabsContent>
        </Tabs>
    )
}