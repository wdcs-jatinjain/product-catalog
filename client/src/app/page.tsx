import Link from "next/link";
import Hero from "./Components/Layout/Hero";
import HomeMenu from "./Components/Layout/HomeMenu";

const page = () => {
  return (
    <div>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <h3>Our Story</h3>
        <h3>About Us</h3>
        <div className="max-w-md text-gray-500 mx-auto flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
            repudiandae fuga, at temporibus iure blanditiis? Quia, incidunt
            error? Consectetur sit enim illum quibusdam minima sapiente saepe
            modi, aspernatur dolor!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vitae sapiente blanditiis voluptatem commodi optio
            dolorum quo earum voluptas ex veritatis accusamus similique! Iusto
            porro, dignissimos facilis voluptas quibusdam doloribus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
            neque, aliquam at reprehenderit necessitatibus accusamus repellendus
            facere illo quibusdam totam beatae dolore, veniam esse tempore
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <h3>Dont hesitate</h3>
        <h3>Contact Us</h3>

        <div className="mt-8">
          <Link
            className="text-2xl underline text-red-500"
            href="tel:- +91 8888 8888"
          >
            +91 8888 8888
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
