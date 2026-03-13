import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Location from './Location'

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 pb-32">
            <h1 className="text-7xl font-bold text-white max-w-5xl leading-tight">
                Dünyayı <span className="bg-gradient-to-br from-cyan-400 to-green-200 bg-clip-text text-transparent">Kaan Truzim</span> ile Keşfet
            </h1>
            <div className="mt-6 w-full max-w-3xl">
                <p className="text-white text-2xl">
                    Unutulmaz anılar biriktirmek için en güzel rotaları sizin için seçtik. Hayallerinizdeki tatile bir adım daha yaklaşın.
                </p>
            </div>
            <button className="mt-8 mb-16 px-8 py-4 bg-gradient-to-br from-cyan-500 to-green-400 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 text-white rounded-full font-bold text-lg shadow-xl uppercase tracking-wider">
                Rotaları İncele <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </button>

            <Location />
        </div>
    )
} 
