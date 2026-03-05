import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Location() {
    const [date, setDate] = useState('')
    return (
        <div className="flex justify-center w-full px-4 z-20">
            <div className="w-full max-w-6xl bg-white/10 backdrop-blur-[24px] border border-white/20 rounded-[40px] p-4 lg:p-6 flex flex-col md:flex-row items-center gap-4 shadow-2xl">
                <div className="flex-1 flex items-start gap-4 w-full md:w-auto px-6 py-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-white text-xl mt-1.5" />
                    <div className="flex flex-col flex-1">
                        <h2 className="text-white font-bold text-sm text-start">Nereye?</h2>
                        <input
                            type="text"
                            placeholder="Şehir veya Bölge"
                            className="bg-transparent border-none outline-none text-white text-lg mt-0.5 placeholder:text-white/40 w-full"
                        />
                    </div>
                </div>


                <div className="hidden md:block h-12 w-px bg-white/20 mx-4"></div>


                <div className="flex-1 flex items-start gap-4 w-full md:w-auto px-6 py-2">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-white text-xl mt-1.5" />
                    <div className="flex flex-col flex-1 ">
                        <h2 className="text-white font-bold text-sm text-start">Ne Zaman?</h2>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-transparent border-none outline-none text-white text-lg mt-0.5 w-full [color-scheme:dark]"
                        />

                    </div>
                </div>


                <div className="px-2 w-full md:w-auto">
                    <button className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:from-[#38bdf8] hover:to-[#3b82f6] text-white rounded-[32px] flex items-center justify-center gap-3 font-bold text-lg shadow-[0_4px_15px_rgba(14,165,233,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>Arama Yap</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
