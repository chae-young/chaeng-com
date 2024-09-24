import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Button asChild><Link href='/i/flow/login'>로그인</Link></Button>
  );
}
