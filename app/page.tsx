import CallToAction from "@/components/call-to-action";
import Featured from "@/components/featured";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}
