'use client';

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  // 서버 컴포넌트는 auth에서
  const session = useSession();
  if(session.data) {
    router.replace('/home');
    return null;
  }
  router.replace('/i/flow/login');

  return (
    <Main/>
  );
}
