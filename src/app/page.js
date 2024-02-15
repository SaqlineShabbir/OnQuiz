import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import UpcomingCourses from "@/components/home/UpcomingCourses";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";


export default function Home() {
  return (
    <main className="h-full">
      <Navigation></Navigation>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <UpcomingCourses></UpcomingCourses>
      <Footer></Footer>
    </main>
  );
}
