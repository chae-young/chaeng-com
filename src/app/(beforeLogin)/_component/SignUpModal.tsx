'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import onSubmit from "@/app/(beforeLogin)/_lib/signup";
import { useFormState, useFormStatus } from "react-dom";

function showMessage(message: string) {
    if(message === 'no_id') {
        return '아이디를 입력하세요';
    }
    if(message === 'no_name') {
        return '닉네임를 입력하세요';
    }
    if(message === 'no_password') {
        return '비밀번호를 입력하세요';
    }
    if(message === 'no_image') {
        return '프로필 이미지를 입력하세요';
    }
    return '';
}

export default function SignUpModal() {
    const [state, formAction] = useFormState(onSubmit, {message: ''}); // 초기 state
    const { pending } = useFormStatus();

    // const submit = onSubmit;

    return (
        <Dialog defaultOpen={true}>
            <DialogContent>
                <DialogHeader className="text-3xl">
                    <DialogTitle>회원가입</DialogTitle>
                </DialogHeader>                
                <form className="grid gap-4" action={formAction}>
                    <div className="grid gap-2">
                        <Label htmlFor="id">id</Label>
                        <Input
                            id="id"
                            name="id"
                            type="text"
                            placeholder="아이디 입력"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="nickname">nickname</Label>
                        <Input
                            id="nickname"
                            name="nickname"
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
                            name="password"
                            placeholder="비밀번호 입력"
                            required
                    />
                    </div>      
                    <div className="grid gap-2">
                        <Label htmlFor="image">프로필 이미지</Label>
                        <Input
                            id="image"
                            name="image"
                            type="file"
                            placeholder="비밀번호 입력"
                            required
                        />
                    </div>                                                      
                    <DialogFooter>
                        <Button disabled={pending}>가입하기</Button>
                    </DialogFooter>  
                    <p className="text-red-600">{showMessage(state?.message as string)}</p>              
                </form>
            </DialogContent>
        </Dialog>      
    )
}