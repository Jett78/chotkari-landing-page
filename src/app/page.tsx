import Navbar from "@/components/Navbar";;
import MainContent from "@/components/MainContent";
import TopContainer from "@/components/TopSection";
import GiveawayDescription from "@/components/Giveaway";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className="ck-header">
        <section className="ck-hero-section">
          <div className="ck-inner-hero-section">
            <Navbar />
            <TopContainer />
          </div>
        </section>
      </header>
      <MainContent />
      <GiveawayDescription />
      <JoinWaitlist />
      <Footer />

    </>
  );
}
