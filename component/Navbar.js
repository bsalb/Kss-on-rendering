import Link from "next/link";

import routes from "@/routes";

const Navbar = () => {
  return (
    <div className="mt-10 w-full">
      <ul className="flex flex-row gap-x-4 text-gray-700 border border-gray-600 px-4 py-3 rounded-md">
        {routes.map((route, index) => (
          <li
            className=" hover:underline  hover:font-bold outline-none"
            key={index}
          >
            <Link href={route.link}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
