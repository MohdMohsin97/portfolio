import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export const Socials = () => {
  return (
    <div className=" w-1/6 flex justify-evenly">
      <a href="https://twitter.com/MohdMohsin97" target="_blank">
        <TwitterLogoIcon className="h-5 w-5 " />
      </a>
      <a href="https://github.com/MohdMohsin97" target="_blank">
        <GitHubLogoIcon className="h-5 w-5" />
      </a>
    </div>
  );
};
