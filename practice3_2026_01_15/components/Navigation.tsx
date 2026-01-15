import Link from "next/link"

export default function Navigation(){
    return(
        <div className="bg-blue-100 text-blue-600 p-4 ">
            <ul>
            <li>
                <Link href="/about-us">
                    <button className="hover:font-bold"> about-us </button>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <button> home </button>
                </Link>
            </li>
            </ul>
        </div>
    )
}