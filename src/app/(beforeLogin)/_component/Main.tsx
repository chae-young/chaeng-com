import Link from "next/link";

export default function Main() {
   return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">로그인</h1>
                    <p className="text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div className="mt-4 text-sm text-center">
                    <Link href="/login" className="underline">
                        로그인
                    </Link>
                </div>
            </div>
        </div>
        <div className="items-center justify-center hidden bg-muted lg:flex">
            <p className="text-3xl font-bold">chaeng.com에 오신걸 환영합니다.</p>
        </div>
    </div>
   ) 
}