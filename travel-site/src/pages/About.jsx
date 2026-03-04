import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import heroBg from "../assets/images/hero-bg.avif";

export default function About() {
    return (
        <div className="select-none bg-[#0f172a] min-h-screen text-white">
            <div
                className="w-full min-h-[350px] md:h-[400px] bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center pt-32 md:pt-36 pb-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(15, 23, 42, 0.6)), url(${heroBg})`
                }}
            >
                <Topbar />
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-center animate-in slide-in-from-top duration-700 px-4">
                    Hakkımızda
                </h1>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 italic uppercase tracking-tighter">Hikayemiz</h2>
                <div className="space-y-6 text-white/70 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                        Kaan Truzim, 2010 yılında seyahat tutkusunu profesyonel bir hizmete dönüştürmek amacıyla kuruldu.
                        Amacımız, her misafirimizin hayallerindeki rotayı en konforlu ve güvenli şekilde keşfetmesini sağlamaktır.
                    </p>
                    <p>
                        Yılların verdiği tecrübe ve dünya çapındaki geniş partner ağımızla, butik turlardan lüks tatillere kadar
                        geniş bir yelpazede hizmet sunuyoruz. Her ayrıntıyı sizin için planlıyor, size sadece anın tadını çıkarmayı bırakıyoruz.
                    </p>
                    <p>
                        Profesyonel rehberlerimiz, modern araç filomuz ve 7/24 destek ekibimizle seyahatinizin her anında yanınızdayız.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
