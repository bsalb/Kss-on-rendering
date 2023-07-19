import Link from "next/link";

import routes from "@/routes";

const Navbar = () => {
  return (
    <ul className="flex mt-5 flex-row gap-x-4 text-gray-700 border border-gray-600 px-4 py-3 rounded-md">
      {routes.map((route, index) => (
        <li
          className=" hover:underline  hover:font-bold outline-none"
          key={index}
        >
          <Link href={route.link}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
