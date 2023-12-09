import { Contact } from "ui";
import { About, Resume, HomePage } from "ui";


const Home = (): JSX.Element => {
  return <section>
      <div className="fixed bg-[url('/assests/background.jpg')] bg-cover w-full h-screen -z-10"></div>
      <HomePage />
      <About />
      <Resume />
      <Contact />
  </section>;
};

export default Home;
