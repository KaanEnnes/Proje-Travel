import heroBg from "../assets/images/hero-bg.avif";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import RotationCard from "../components/RotationCard";


import Paris from "../assets/images/Paris.png";
import Londra from "../assets/images/Londra.png";
import Roma from "../assets/images/Roma.png";
import Tokyo from "../assets/images/Tokyo.png";
import Bali from "../assets/images/Balijpg.jpg";
import Maldivler from "../assets/images/Maldivler.jpg";
import NewYork from "../assets/images/Newyork.jpg";
import Yunanistan from "../assets/images/Yunanistan.jpg";

function Destinations() {
  return (
    <div className="select-none bg-[#0f172a] min-h-screen font-['Outfit',_sans-serif]">

      <div
        className="w-full h-[500px] bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(15, 23, 42, 0.6)), url(${heroBg})`
        }}
      >
        <Topbar />
        <h1 className="text-white text-6xl md:text-7xl font-black tracking-tighter uppercase italic text-center animate-in slide-in-from-top duration-700">
          Tüm Rotalarımız
        </h1>
        <p className="text-white/70 text-xl md:text-2xl font-light text-center mt-6 max-w-2xl px-4 animate-in fade-in duration-1000 leading-relaxed italic">
          Sizin için özenle seçilmiş en güzel seyahat noktalarını keşfedin
        </p>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <RotationCard
            image={Paris}
            price="$100"
            star="4.5"
            location="Paris, Fransa"
          />


          <RotationCard
            image={Londra}
            price="$150"
            star="4.8"
            location="Londra, İngiltere"
          />


          <RotationCard
            image={Roma}
            price="$120"
            star="4.7"
            location="Roma, İtalya"
          />


          <RotationCard
            image={Tokyo}
            price="$200"
            star="4.9"
            location="Tokyo, Japonya"
          />


          <RotationCard
            image={Bali}
            price="$300"
            star="4.9"
            location="Bali, Endonezya"
          />


          <RotationCard
            image={NewYork}
            price="$250"
            star="4.6"
            location="New York, ABD"
          />


          <RotationCard
            image={Maldivler}
            price="$450"
            star="5.0"
            location="Maldivler"
          />


          <RotationCard
            image={Yunanistan}
            price="$180"
            star="4.8"
            location="Santorini, Yunanistan"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Destinations;
