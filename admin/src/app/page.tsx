import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8 text-xl font-bold">Welcome to Our Admin Page</div>
        <Link href="/login">
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ">
            Login Now
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
