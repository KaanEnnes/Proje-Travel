import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconCard({ icon, title, description }) {
    return (
        <div className="group p-8 md:rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={icon} className="text-3xl text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white/60 leading-relaxed font-light">
                {description}
            </p>
        </div>
    )
}