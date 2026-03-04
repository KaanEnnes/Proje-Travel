import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";




export default function Topbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-6 left-0 w-full flex justify-center items-center z-50 px-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <div className="w-full md:max-w-5xl mx-auto bg-white/1 p-4 rounded-2xl border border-white/20 backdrop-blur-md flex justify-between items-center shadow-2xl transition-all duration-300 md:hover:bg-white/[0.15]">
                <h1 className="select-none leading-none">
                    <Link to="/" className="flex items-center gap-2 text-3xl font-extrabold tracking-tight hover:opacity-90 transition-opacity duration-300 pb-1">
                        <FontAwesomeIcon icon={faCompass} className="text-sky-400" />
                        <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-white bg-clip-text text-transparent">Kaan Truzim</span>
                    </Link>
                </h1>
                <div className="flex gap-8 items-center text-white/90 font-medium tracking-wide relative" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    
                    <ul className="absolute right-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <li className="text-xl hover:text-sky-400 transition-colors duration-300 cursor-pointer">
                            <FontAwesomeIcon icon={faBars} className="text-sky-400"/>
                        </li>
                    </ul>

                    {isMenuOpen && (
                        <ul className="absolute top-3 right-0 w-48 bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 flex flex-col gap-3 p-4 md:hidden">
                            <li><Link to="/" className="relative text-white/90 hover:text-sky-400 transition-colors duration-300 py-1 group" onClick={() => setIsMenuOpen(false)}>Ana Sayfa<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span></Link></li>
                            <li><Link to="/about" className="relative text-white/90 hover:text-sky-400 transition-colors duration-300 py-1 group" onClick={() => setIsMenuOpen(false)}>Hakkımızda<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span></Link></li>
                            <li><Link to="/destinations" className="relative text-white/90 hover:text-sky-400 transition-colors duration-300 py-1 group" onClick={() => setIsMenuOpen(false)}>Rotalarımız<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span></Link></li>
                        </ul>
                    )}
                    
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
