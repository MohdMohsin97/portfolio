import { Twitter } from "lucide-react";
import { SocialType } from "./profile";

export const Social = ({ name, link, svg }: SocialType): JSX.Element => {
  return (
    <section className="w-8 h-8 flex justify-center items-center bg-[#457B9D] rounded-full p-1 m-1 cursor-pointer">
      {svg}
    </section>
  );
};
