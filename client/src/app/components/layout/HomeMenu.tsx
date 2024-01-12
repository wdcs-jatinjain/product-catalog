import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute  left-0 right-0 justify-start w-full">
        <div className="absolute text-left -top-[70px] left-0 -z-10">
          <Image src={"/mac1.png"} width={109} height={189} alt="mac" />
        </div>
        <div className="h-48  absolute -top-[100px] right-0 -z-10">
          <Image src={"/mac2.png"} width={107} height={195} alt="mac" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
