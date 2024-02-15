import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Footer from "@/components/shared/Footer";


export default function Home() {
  return (
    <main className="h-full">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </main>
  );
}
