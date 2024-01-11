import Image from "next/image";
export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-shadow-black transition-all">
      <div className="text-center ">
        <Image
          src="/iphone.png"
          className="max-h-auto max-h-24 block mx-auto"
          alt="iphone1"
          width={107} height={195}
          
        />
      </div>
      <h4 className="font-semibold text-xl my-3">IPhone 15 Pro Max</h4>
      <p className="text-gray-500 text-sm"></p>
      <button className="mt-4  bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $999
      </button>
    </div>
  );
}
