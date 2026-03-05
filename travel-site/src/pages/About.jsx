import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import heroBg from "../assets/images/hero-bg.avif";
import IconCard from "../components/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faPlaneDeparture, faHandshakeAngle, faAward } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div className="select-none">
            <div
                className="w-full bg-cover bg-center bg-fixed relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(15, 23, 42, 0.5)), url(${heroBg})`
                }}>
                <Topbar />
                <div className="h-full">
                    <h1 className="text-5xl font-bold text-white text-center pt-30">Neden Kaan Turizm?</h1>
                    <p className="text-white/90 max-w-4xl mx-auto leading-relaxed py-10 italic text-center">"Her yolculuk yeni bir hikaye, her hikaye ise yeni bir dostluktur. Kaan Turizm, butik hizmet anlayışı ve kişiye özel seyahat planlamalarıyla, sıradan turların ötesinde ruhu olan yolculuklar vaat ediyor. Gökyüzünün kristal maviliğinden antik şehirlerin gizemine kadar, dünyayı bizimle yeniden keşfedin."</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-screen max-w-7xl mx-auto mt-20">
                <IconCard icon={faEarthAmericas} title="Global Rotalar" description="Dünyanın dört bir yanındaki binlerce destinasyon seçeneği ile hayallerinizdeki tatili bulun." />
                <IconCard icon={faPlaneDeparture} title="Uzman Rehberler" description="Alanında uzman rehberlerimizle rotalarınızı daha anlamlı ve güvenli bir şekilde keşfedin." />
                <IconCard icon={faHandshakeAngle} title="Güvenli Ödeme" description="En üst düzey güvenlik standartları ile ödemelerinizi gönül rahatlığıyla gerçekleştirin." />
                <IconCard icon={faAward} title="7/24 Destek" description="Seyahatinizin her anında yanınızdayız. Canlı destek hattımızla bize her an ulaşabilirsiniz." />

            </div>
            <Footer />
        </div>
    );
}
