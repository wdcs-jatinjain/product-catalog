import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
       <h3>Our Story</h3> 
       <h4>About Us</h4>
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
       <h4>Contact Us</h4>
        <div className="mt-8">
          <a
            className="text-2xl underline text-red-500"
            href="tel:- +91 8888 8888"
          >
            +91 8888 8888
          </a>
        </div>
      </section>



    </>
  );
}
