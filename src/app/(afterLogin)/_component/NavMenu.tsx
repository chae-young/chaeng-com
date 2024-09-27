'use client';

import { Button } from "@/components/ui/button";
import { DrawingPinIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavMenu() {
    const segment = useSelectedLayoutSegment();
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
                <nav className="flex flex-col gap-4 px-2 sm:py-4 h-screen">
                    <Link
                        href="/home"
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'home' && 'font-bold'}`}>홈</span>
                    </Link>                                
                    <Link
                        href="/profile"
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'profile' && 'font-bold'}`}>프로필</span>
                    </Link>
                    <Link
                        href="/explore"
                        className="flex items-center gap-2 pl-2 hover:text-foreground"
                    >
                        <DrawingPinIcon />
                        <span className={`${segment === 'explore' && 'font-bold'}`}>탐색하기</span>
                    </Link>                                                    
                    <Button asChild className="mt-auto"><Link href="/compose/tweet">게시하기</Link></Button>            
                </nav>
            </aside>        
        </>
    )
}