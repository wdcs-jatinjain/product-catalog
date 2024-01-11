import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <>
      <section className="hero mt-4">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything<br/> is better<br/> with a <br/><span className="text-primary">Iphone</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
            Iphone is the missing piece that makes everyDay complete, a very powefull addition to your Life!{" "}
          </p>

          <div className="flex gap-4 text-sm">
            <button className= "justify-center bg-primary uppercase flex items-center gap-2 text-white px-5 py-2 rounded-full ">
              Buy Now
              <Right />
            </button>
            <button className="border-0 flex items-center gap-2 py-2 text-gray-600 font-semibold">
              Learn More <Right />
            </button>
          </div>
        </div>
        <div className=" relative">
          <Image
            src={"/iphone.png"}
            // layout="fill"
            // objectFit="contain"
            width={300} 
            height={500}
            alt="iphone"
          ></Image>
        </div>
      </section>
    </>
  );
}
