'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { TabContext } from "./TabProvider";
import PostRecommends from "./PostRecommends";
import FollowingsPosts from "./FollowingsPosts";

export default function Tab() {
    const { tab, setTab } = useContext(TabContext);
    const onClickRec = () => {
        setTab('rec')
    }

    const onClickFol = () => {
        console.log('?')
        setTab('fol')
    }

    return (
        <Tabs defaultValue="account" className="">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger onClick={onClickRec} value="rec">팔로우</TabsTrigger>
                <TabsTrigger onClick={onClickFol}  value="fol">팔로잉</TabsTrigger>
            </TabsList>
            <TabsContent value="rec">
                <PostRecommends/>
            </TabsContent>
            <TabsContent value="fol">
                <FollowingsPosts/>
            </TabsContent>            
        </Tabs>
    )
}