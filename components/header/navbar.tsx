import { ReactNode } from "react";
import {
  FileIcon,
  PersonIcon,
  IdCardIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
export type NavTypes = {
  name: String;
  link: string;
  svg: ReactNode;
};

const navs: NavTypes[] = [
  {
    name: "Home",
    link: "#home",
    svg: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: "Resume",
    link: "#resume",
    svg: <FileIcon className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    svg: <PersonIcon className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    svg: <IdCardIcon className="h-4 w-4" />,
  },
];

export const Navbar = () => {
  return (
    <section className="flex justify-center items-center">
      {navs.map((nav, i) => (
        <li key={i} className="list-none">
          <a href={nav.link}>
            <div className="flex items-center m-3 border-b-2 border-transparent hover:border-foreground ">
              {nav.svg}
              <p className="ml-2  cursor-pointer ">{nav.name}</p>
            </div>
          </a>
        </li>
      ))}
    </section>
  );
};
