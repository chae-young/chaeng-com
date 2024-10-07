"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/no-explicit-any
export default async (previousState: any, formData: FormData) => { 
    if (!formData.get('id') || !formData.get('id')?.toString().trim()){
        return { message: 'no_id' };
    }
    if (!formData.get('nickname' || !formData.get('id')?.toString().trim())){
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
        console.log(response)
        if(response.status === 403) {
            return { message: 'already_exist' };
        }

        // 회원가입 성공후 로그인
        await signIn('credentials', {
            username: formData.get('id'),
            password: formData.get('password'),
            redirect: false
        })
        shouldRedirect = true;
        
    }catch(err){
        console.log(err)
    }

    if(shouldRedirect) {
        return redirect('/home');
    }
}


