import Banner from "@/component/Banner";
import Expert from "@/component/Shared/Expert";
import Footer from "@/component/Shared/Footer";
import PopularSection from "@/component/Shared/PopularSection";
import Tips from "@/component/Shared/Tips";
import TrendingNow from "@/component/Shared/TrendingNow";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularSection></PopularSection>
      <Tips></Tips>
      <Expert></Expert>
      <TrendingNow></TrendingNow>
      <Footer></Footer>
      
    </div>
  );
}
