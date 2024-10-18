
"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function RightSearhZone() {
    const pathname = usePathname();
    const searchParmas = useSearchParams();
    const router = useRouter();
    
    const onChangeFollow = () => {
        const url = `/search?${searchParmas.toString()}&pf=on`
        router.replace(url);
    }

    const onChangeAll = () => {
        let url = `/search?q=${searchParmas.get('q')}`;
        if(searchParmas.get('f')) url += `&f=${searchParmas.get('f')}`;
        router.replace(url);
    }

    if(pathname === "/explore") return null;
    if(pathname === "/search") {
        return (
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="pf" onChange={onChangeAll}/>
                <Label htmlFor="pf">모든 사용자</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" onChange={onChangeFollow}/>
                <Label htmlFor="pf">내가 팔로우하는 사람들</Label>
            </div>
        </RadioGroup>        
        )
    }
}