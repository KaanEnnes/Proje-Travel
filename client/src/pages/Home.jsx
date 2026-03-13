import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import heroBg from "../assets/images/hero-bg.avif";
import Paris from "../assets/images/Paris.png";
import Londra from "../assets/images/Londra.png";
import Roma from "../assets/images/Roma.png";
import Tokyo from "../assets/images/Tokyo.png";
import Hero from "../components/Hero";
import IconCard from "../components/IconCard";
import RotationCard from "../components/RotationCard";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCompass, faShieldHalved, faHeadset, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="select-none">

      <div className="bg-[#0f172a] min-h-screen">
        <div
          className="w-full h-screen bg-cover bg-center bg-fixed relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(15, 23, 42, 0.5)), url(${heroBg})`
          }}
        >
          <Topbar />
          <Hero />
        </div>

        <div className="relative z-10 mt-70 md:mt-20 pb-0">
          <div className="py-20 px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tighter italic">Neden Kaan Truzim?</h2>
              <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
                Size en iyi seyahat deneyimini sunabilmek için dünya çapında ağımız ve uzman ekibimizle profesyonel çözümler üretiyoruz.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            <IconCard
              icon={faGlobe}
              title="Global Rotalar"
              description="Dünyanın dört bir yanındaki binlerce destinasyon seçeneği ile hayallerinizdeki tatili bulun."
            />
            <IconCard
              icon={faCompass}
              title="Uzman Rehberler"
              description="Alanında uzman rehberlerimizle rotalarınızı daha anlamlı ve güvenli bir şekilde keşfedin."
            />
            <IconCard
              icon={faShieldHalved}
              title="Güvenli Ödeme"
              description="En üst düzey güvenlik standartları ile ödemelerinizi gönül rahatlığıyla gerçekleştirin."
            />
            <IconCard
              icon={faHeadset}
              title="7/24 Destek"
              description="Seyahatinizin her anında yanınızdayız. Canlı destek hattımızla bize her an ulaşabilirsiniz."
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 mb-32">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter uppercase italic">Popüler Rotalar</h2>
                <p className="text-white/50">En çok tercih edilen, hayallerinizi süsleyen dünya çapındaki destinasyonlar.</p>
              </div>
              <button
                className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-2"
                onClick={() => navigate("/destinations")}
              >
                Tümünü Gör <FontAwesomeIcon icon={faArrowRightLong} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <RotationCard
                image={Paris}
                price="$100"
                star="4.5"
                location="Paris"
              />
              <RotationCard
                image={Londra}
                price="$150"
                star="4.8"
                location="Londra"
              />
              <RotationCard
                image={Roma}
                price="$120"
                star="4.7"
                location="Roma"
              />
              <RotationCard
                image={Tokyo}
                price="$200"
                star="4.9"
                location="Tokyo"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
