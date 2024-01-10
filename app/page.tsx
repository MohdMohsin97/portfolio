import { About } from "@/components/dashboard/about";
import { Home } from "@/components/dashboard/home";
import { Header } from "@/components/header/header";
import { Resume } from "@/components/dashboard/resume";
import { Contact } from "@/components/dashboard/contact";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Home />
      <Resume
        className={"h-screen flex justify-center items-center text-3xl"}
      />
      <About
        className={"h-screen  flex justify-center items-center text-3xl"}
      />
      <Contact
        className={"h-screen flex justify-center items-center text-3xl"}
      />
    </div>
  );
}
