import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="relative bg-[#0f172a] border-t border-white/5 pt-24 pb-12 overflow-hidden">

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">


                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">
                            Kaan <span className="text-sky-400">Truzim</span>
                        </h2>
                        <p className="text-white/40 leading-relaxed text-lg font-light">
                            Dünyanın en güzel rotalarını keşfetmeniz için size eşsiz deneyimler sunuyoruz. Hayallerinizdeki tatil bir adım uzağınızda.
                        </p>
                        <div className="flex gap-4">
                            {[faInstagram, faFacebook, faTwitter, faYoutube].map((icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/5 transition-all duration-300"
                                >
                                    <FontAwesomeIcon icon={icon} className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest">Hızlı Linkler</h3>
                        <ul className="flex flex-col gap-6">
                            {['Ana Sayfa', 'Rotalarımız', 'Hakkımızda', 'Blog', 'İletişim'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-3 group text-lg">
                                        <span className="h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-4" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest">Bize Ulaşın</h3>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div>
                                    <p className="text-white/30 text-sm mb-1">Müşteri Destek</p>
                                    <p className="text-white font-medium">+90 (212) 555 01 23</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                    <p className="text-white/30 text-sm mb-1">Email Adresimiz</p>
                                    <p className="text-white font-medium">info@kaantruzim.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div>
                                    <p className="text-white/30 text-sm mb-1">Ofisimiz</p>
                                    <p className="text-white font-medium leading-relaxed">İstanbul, Türkiye</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest">Bültenimize Katılın</h3>
                        <p className="text-white/40 mb-8 leading-relaxed">
                            En yeni turlardan ve kampanyalardan ilk siz haberdar olun.
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="E-posta adresiniz"
                                className="w-full bg-white/5 border border-white/10 rounded-[20px] py-5 px-6 outline-none text-white focus:border-sky-400/50 transition-colors"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-sky-500 hover:bg-sky-400 text-white rounded-xl transition-all flex items-center justify-center shadow-lg shadow-sky-500/30 active:scale-95">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>

                </div>


                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-sm">
                        © 2026 Kaan Truzim. Tüm Hakları Saklıdır.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-white/20 hover:text-white text-sm transition-colors uppercase tracking-widest font-bold">Gizlilik Politikası</a>
                        <a href="#" className="text-white/20 hover:text-white text-sm transition-colors uppercase tracking-widest font-bold">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
