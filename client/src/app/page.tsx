import { ToastContainer } from "react-toastify";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-8 text-xl font-bold">Welcome to Our Home Paage</div>

        <Link
          href="/register"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Register Now
        </Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
