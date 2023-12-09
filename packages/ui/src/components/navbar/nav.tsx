import { NavTypes } from "./navbar";

export const Nav = ({ name, link, svg }: NavTypes) => {
  return (
    <section>
      <a href={link}>
        <div className="flex ml-8 my-4 group ">
          {svg}
          <p className="text-white ml-2 group-hover:text-black cursor-pointer ">
            {name}
          </p>
        </div>
      </a>
    </section>
  );
};
