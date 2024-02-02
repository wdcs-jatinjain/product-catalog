import { ToastContainer } from "react-toastify";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8 text-xl font-bold">Welcome to Our Home Paage</div>
        <Link href="/register">
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Register Now
          </div>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
