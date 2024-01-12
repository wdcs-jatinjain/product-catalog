import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={"/"}>
          <Link href={"/"} className="text-primary font-semibold text-2xl">
            APPLE STORE
          </Link>
        </Link>
    
        <Link href={"/"}>HOME</Link>
        <Link href={""}>PRODUCTS</Link>
        <Link href={""}>ABOUT</Link>
        <Link href={""}>CONTACT US</Link>
        <Link href="/login">Login</Link>
        <Link
          href={"/register"}
          className="bg-primary text-white rounded-full px-8 py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
