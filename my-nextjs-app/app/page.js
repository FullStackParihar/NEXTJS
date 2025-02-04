 
import Image from "next/image";
import Link from "next/link";
import About from "@/AboutPage/page.js";

export default function Home() {
  return (
   <>
<div>
  <h1>this is my next app</h1>
  <Link href="/AboutPage/page.js">
  <button>
    About
    </button></Link>
  
</div>
  </>
  );
}
