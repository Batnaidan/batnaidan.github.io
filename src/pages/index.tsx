import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import Hero from "~/components/Hero";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import Education from "~/components/Education";

const Home: NextPage = () => {
  console.log("aren't u cute lil dev");

  return (
    <Layout>
      <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
    </Layout>
  );
};

export default Home;
