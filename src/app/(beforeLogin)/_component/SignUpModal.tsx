import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function SignUpModal() {
    const submit = async (formData: FormData) => {
        'use server';
        
        if (!formData.get('id')){
            return { message: 'no_id' };
        }
        if (!formData.get('name')){
            return { message: 'no_name' };
        }      
        if (!formData.get('password')){
            return { message: 'no_password' };
        }
        if (!formData.get('image')){
            return { message: 'no_image' };
        }

        let shouldRedirect = false;

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            })

            if(response.status === 403) {
                return { message: 'already_exist' };
            }

            shouldRedirect = true;

        }catch(err){
            console.log(err)
        }

        if(shouldRedirect) {
            return redirect('/login');
        }
    }

    return (
        <Dialog defaultOpen={true}>
            <DialogContent>
                <DialogHeader className="text-3xl">
                    <DialogTitle>회원가입</DialogTitle>
                </DialogHeader>                
                <form className="grid gap-4" action={submit}>
                    <div className="grid gap-2">
                        <Label htmlFor="id">id</Label>
                        <Input
                            id="id"
                            type="text"
                            placeholder="아이디 입력"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="nickname">nickname</Label>
                        <Input
                            id="nickname"
                            type="text"
                            placeholder="닉네임 입력"
                            required
                        />
                    </div>                    
                    <div className="grid gap-2">
                        <Label htmlFor="password">password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="비밀번호 입력"
                            required
                    />
                    </div>      
                    <div className="grid gap-2">
                        <Label htmlFor="image">프로필 이미지</Label>
                        <Input
                            id="image"
                            type="file"
                            placeholder="비밀번호 입력"
                            required
                        />
                    </div>                                                      
                    <DialogFooter>
                        <Button disabled>가입하기</Button>
                    </DialogFooter>                
                </form>
            </DialogContent>
        </Dialog>      
    )
}