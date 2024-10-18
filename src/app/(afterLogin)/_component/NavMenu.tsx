'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DrawingPinIcon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavMenu() {
    const router = useRouter();
    const { data } = useSession();
    const segment = useSelectedLayoutSegment();
    const onLogout = () => {
        // client에서 로그아웃
        signOut( {redirect: false} ).
        then(() => {
            router.replace('/')
        })
    }
    console.log(data)
    if(!data?.user) {
        return null;
    }

    return (
        <>
            {/* <header className="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <HamburgerMenuIcon className="w-5 h-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/home"
                            className="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold rounded-full group shrink-0 bg-primary text-primary-foreground md:text-base"
                        >
                            <DrawingPinIcon/>
                            <span>홈</span>
                        </Link>                
                    </nav>
                    </SheetContent>
                </Sheet>
            </header> */}
            
            <aside className="h-screen border-r bg-background">
                <nav className="fixed flex flex-col h-screen gap-4 px-2 sm:py-4">
                    <Link
                        href="/home"
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'home' && 'font-bold'}`}>홈</span>
                    </Link>                                
                    <Link
                        href={`/${data.user.email}/profile}`}
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'profile' && 'font-bold'}`}>프로필</span>
                    </Link>
                    <Link
                        href="/messages"
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'messages' && 'font-bold'}`}>쪽지</span>
                    </Link>                    
                    <Link
                        href="/explore"
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'explore' && 'font-bold'}`}>탐색하기</span>
                    </Link>
                    <div className="mt-auto">
                        <Avatar>
                            <AvatarImage src={data.user.image || ''} alt={data.user.name || ''} />
                            <AvatarFallback>이건모에요</AvatarFallback>                    
                        </Avatar>
                        <Button variant="outline" className="w-full" onClick={onLogout}>로그아웃</Button>
                        <Button asChild><Link href="/compose/tweet" className="w-full">게시하기</Link></Button>            
                    </div>                                                    
                </nav>
            </aside>        
        </>
    )
}