import Link from "next/link";

export default function Page123(){
    return (
        <div style = {{padding: "50px"}}>
        <h1> 여기는 123페이지 입니다!</h1>

        <br/>
        <Link href ="/">
            <button className="w-24 h-24 bg-blue-500 text-white border-2 border-black">메인페이지로 돌아가기</button>
        </Link>
        </div>

    );
}