import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

export default function RotationCard({ image, price, star, location, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative overflow-hidden rounded-[32px] bg-slate-800/50 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.3)] cursor-pointer"
        >
            <div className="aspect-[4/5] overflow-hidden">
                <img
                    src={image}
                    alt={location}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute top-5 right-5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-bold text-sm shadow-xl">
                {price}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{location}</h3>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <span className="flex items-center text-yellow-400"><FontAwesomeIcon icon={faStar} /></span>
                            <span>{star}</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}