'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler } from "react";

export default function SearchForm() {
    const router = useRouter();
    const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.search)
        // input에 state안넣고도 가져올수있음.
        router.push(`/search?q=${event.currentTarget.search.value}`)
    }

    return (
        <form className="flex gap-1 mb-3" onSubmit={onSubmit}>
            <Input type="search" name="search"/>
            <Button type="submit">검색</Button>
        </form>
    )
}