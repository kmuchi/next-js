"use client";

import Link from "next/link"
import Navigation from "@/components/navigation";

export default function Aboutus(){


    return (
        <div>
            <Navigation/>
            <h1>about-us</h1>
            <br />
            <Link href="/">
                home으로 돌아가기
            </Link>
        </div>
    )
}
