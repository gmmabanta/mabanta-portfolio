import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Experience from "@/components/landing/experience";
import Projects from "@/components/landing/projects";
import Blog from "@/components/landing/blog";
import CallToAction from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Blog posts={posts} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
