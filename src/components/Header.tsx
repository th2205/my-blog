import Link from "next/link";

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-6 bg-white ">
        <Link className="flex items-center" href="#">
          <span className="text-2xl font-bold text-gray-900">
            임태현 개발 블로그
          </span>
        </Link>
        <div className="flex items-center">
          <Link className="text-gray-700 hover:text-gray-900 mx-2" href="#">
            About
          </Link>
          <Link className="text-gray-700 hover:text-gray-900 mx-2" href="#">
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}
