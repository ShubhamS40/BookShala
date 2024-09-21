import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <div>
  <h1 className="text-5xl">Home Page</h1>

<div className="flex space-x-5 text-2xl">
<Link href={"/about"}>about</Link>
<Link href={"/bookpage"}>bookpage</Link>
</div>
 </div>

  )
}
