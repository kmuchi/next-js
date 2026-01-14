import { Odor_Mean_Chey } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navigation/>
      <br />
      <h1>메인페이지 입니다</h1>
      <Link href="/123">
        <button style={{ padding: "10px 20px", fontSize:"16px", cursor:"pointer"}}>
          123 페이지로 이동하기~
        </button>;
      </Link>;
      <br />
    </div>
  );
}
