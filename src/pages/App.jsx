import BanerSection from "../sections/BanerSection";
import NavbarSection from "../components/navbar/NavbarSection";
import KeunggulanSection from "../sections/KeunggulanSection";
import RuteDanHarga from "../sections/RuteDanHarga";
import GalerySection from "../sections/GalerySection";
import PertanyaanSection from "../sections/PertanyaanSection";
import FooterSection from "../components/footer/FooterSection";

const App = () => {
  return (
    <>
      <NavbarSection />
      <BanerSection />
      <KeunggulanSection/>
      <RuteDanHarga/>
      <GalerySection/>
      <PertanyaanSection/>
      <FooterSection/>
    </>
  );
};
export default App;
