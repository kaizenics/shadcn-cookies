import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CookiesPreview } from "@/components/cookies-preview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CookiesPreview />
      <Footer />
    </>
  );
}
