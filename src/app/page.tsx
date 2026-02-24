import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Devices from "@/components/Devices";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Devices />
      <FAQ />
      <Pricing />
      <CTABanner />
      <Footer />
    </>
  );
}
