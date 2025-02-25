
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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae fuga quidem aliquid eligendi, nam voluptatibus, voluptatum sit minus optio eius illo facere nostrum earum repellat? Nobis accusantium, consequatur maiores modi, similique aspernatur beatae quaerat, expedita corporis tenetur quibusdam dolores asperiores alias fuga laboriosam esse consequuntur hic mollitia perspiciatis? Beatae ad officia mollitia maiores natus voluptas voluptatum vel perspiciatis id dolorum magni eveniet dignissimos eum soluta delectus voluptatibus porro consectetur fugit eius ratione rem maxime, fugiat iste repellendus? Minima alias quia accusamus, temporibus ipsum optio, nam assumenda neque modi quos animi sint molestiae placeat repellendus atque facilis soluta doloremque esse ipsa excepturi iusto, cum quidem? Nobis est ipsum debitis labore. Nobis eius numquam expedita possimus, consequuntur accusantium magni ullam! Nobis a nesciunt sed eum voluptate ut assumenda accusantium distinctio fugiat magnam voluptates, harum dolor ipsa cupiditate dolores numquam saepe dolorem quia, ab excepturi placeat est. Deserunt, asperiores. Pariatur harum nihil vero magnam vitae sapiente iusto totam repudiandae neque! Nam, dignissimos. Optio nobis voluptatum debitis ullam asperiores possimus eum itaque excepturi molestias, molestiae commodi ipsam assumenda eveniet voluptatibus exercitationem fugiat rerum voluptate facilis tempora delectus! Accusamus hic nihil amet odit tempora asperiores explicabo quisquam, accusantium nobis numquam, reiciendis corporis sequi quae adipisci?</p>
<button className=" bg-blue-600 text-center rounded-lg p-4 justify-center " >click me</button>
      </div>
    </>
  );
}
