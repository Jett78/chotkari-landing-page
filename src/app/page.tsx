import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import TopContainer from "@/components/TopSection";
import ChotkariNumbers from "@/components/ChotkariNumbers";
import Author from "@/components/Author";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopContainer />
      <MainContent />
     <ChotkariNumbers/>
     <Author/>
    <Footer/>  
    </>
  );
}
