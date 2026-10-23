import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Work from "@/components/portfolio/Work";
import Reviews from "@/components/portfolio/Reviews";
import Cta from "@/components/portfolio/Cta";

const Home = () => {
  return (
    <main className="w-full pt-20 bg-surface dark:bg-surface-dim">
      <div className="flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Cta />
      </div>
    </main>
  );
};
export default Home;
