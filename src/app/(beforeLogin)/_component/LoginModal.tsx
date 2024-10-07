'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEventHandler, FormEventHandler,  useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginModal() {
    const router = useRouter();
    const [id,setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            await signIn('credentials', {
                username: id,
                password: password,
                redirect: false
            })
            
            router.replace('/home')
        }catch(err) {
            console.log(err)
            setMessage('아이디와 비밀번호가 일치하지 않습니다.')
        }
    };

    const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
        setId(e.target.value)
    }

    const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value)
    }    

    return (
        <Dialog defaultOpen={true}>
            <DialogContent>
                <DialogHeader className="text-3xl">
                    <DialogTitle>로그인</DialogTitle>
                </DialogHeader>                
                <form className="grid gap-4" onSubmit={onSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="id">아이디</Label>
                        <Input
                        id="id"
                        type="id"
                        placeholder="아이디 입력"
                        required
                        onChange={onChangeId}
                    />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required onChange={onChangePassword}/>
                    </div>
                    <p className="text-red-500">{message}</p>
                    <DialogFooter>
                        <Button type="submit" className="w-full">
                            로그인
                        </Button>
                    </DialogFooter>                       
                </form>
            </DialogContent>
        </Dialog>      
    )
}