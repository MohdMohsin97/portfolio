import { Contact } from "ui";
import { About, Resume, HomePage } from "ui";

const Home = (): JSX.Element => {
  return (
    <section>
      <div className="fixed w-full h-screen -z-10"></div>
      <HomePage />
      <Resume />
      <About />
      <Contact />
    </section>
  );
};

export default Home;
