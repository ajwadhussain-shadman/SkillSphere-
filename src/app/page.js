import Banner from "@/component/Banner";
import Expert from "@/component/Shared/Expert";
import PopularSection from "@/component/Shared/PopularSection";
import Tips from "@/component/Shared/Tips";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularSection></PopularSection>
      <Tips></Tips>
      <Expert></Expert>
      
    </div>
  );
}
