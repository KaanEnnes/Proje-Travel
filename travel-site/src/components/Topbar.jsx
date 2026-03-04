import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";




export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className=" fixed md:top-6 pt-5 left-0 w-full flex justify-center items-center z-50 md:px-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <div className="w-full md:max-w-5xl md:mx-auto bg-white/1 p-2 md:p-4 rounded-2xl md:border border-white/20 backdrop-blur-md flex justify-between items-center shadow-2xl transition-all duration-300 md:hover:bg-white/[0.15]">
                <h1 className="select-none leading-none">
                    <Link to="/" className="flex items-center gap-2 text-3xl font-extrabold tracking-tight hover:opacity-90 transition-opacity duration-300 pb-1">
                        <FontAwesomeIcon icon={faCompass} className="text-sky-400" />
                        <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-white bg-clip-text text-transparent">Kaan Truzim</span>
                    </Link>
                </h1>
                <div className="flex gap-8 items-center text-white/90 font-medium tracking-wide " style={{ fontFamily: 'Outfit, sans-serif' }}>

                    {/* Mobil Menü Açma/Kapama Butonu */}
                    <button
                        className="absolute right-4 md:hidden text-2xl text-sky-400 hover:text-sky-300 transition-colors duration-300 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
                    </button>


                    {/* Mobil Menü İçeriği */}
                    <ul className={`fixed rounded-l-2xl top-0 right-0 h-screen w-64 bg-white/95 flex flex-col gap-6 p-10 md:hidden z-[60] transform transition-transform duration-500 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                            <span className="text-sky-600 font-bold text-xl">Menü</span>
                            <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-500 hover:text-sky-500 transition-colors">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <li className="w-full">
                            <Link to="/" className="text-gray-800 text-lg font-medium hover:text-sky-500 transition-colors duration-300 flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                Ana Sayfa
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link to="/about" className="text-gray-800 text-lg font-medium hover:text-sky-500 transition-colors duration-300 flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                Hakkımızda
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link to="/destinations" className="text-gray-800 text-lg font-medium hover:text-sky-500 transition-colors duration-300 flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                Rotalarımız
                            </Link>
                        </li>
                    </ul>

                    <ul className="hidden md:flex gap-8 items-center text-white/90 font-medium tracking-wide">

                        <li><Link to="/" className="relative text-white/90 hover:text-sky-400 transition-colors duration-300 py-1 group">Ana Sayfa<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span></Link></li>
                        <li><Link to="/about" className="relative text-white/90 hover:text-sky-400 transition-colors duration-300 py-1 group">Hakkımızda<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span></Link></li>
                        <li><Link to="/destinations" className="relative text-white/90 hover:text-sky-400 transition-colors duration-300 py-1 group">Rotalarımız<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
