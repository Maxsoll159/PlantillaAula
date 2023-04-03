"use client"
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
    const [barraMenu, setBarraMenu] = useState<boolean>(false)
    console.log(barraMenu)
    return (
        <div className={`bg-white lg:flex xl:flex flex-col h-screen hidden transition-all ${barraMenu ? " w-[5%]" : "w-[17%]"}`}>
            <div className="p-4 flex justify-between items-center">
                {
                    !barraMenu && (<Image src="https://download-archivos.s3.amazonaws.com/logo-bg-logo.png" width={170} height={80} alt="Desarrollo Global" unoptimized />)
                }
                <button className={`p-3 rounded-lg text-black focus:text-blue-800 flex items-center ${barraMenu && "mx-auto"}`} onClick={() => setBarraMenu(!barraMenu)}>
                    <i className="fi fi-rr-bars-sort flex"></i>
                </button>
            </div>
            <div className="flex flex-col h-full mt-5 px-4">
                <div className="space-y-2">
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-home flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Home</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-layers flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Cursos</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-graduation-cap flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Diplomass</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-badge flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Diplomados</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-gift flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Obsequios</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-calendar-clock flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Calendario</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-tags flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Pagos</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-diploma flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Certificacion</p>
                    </button>
                    <button className={`flex items-center font-semibold text-lg focus:bg-infoDesa rounded-md w-full focus:text-white gap-5 px-5 py-2 ${barraMenu && "justify-center py-4"}`}>
                        <i className="fi fi-rr-user flex text-xl"></i>
                        <p className={`font-normal ${barraMenu && "hidden"}`}>Perfil</p>
                    </button>
                </div>

                {
                    !barraMenu && (
                        <div className="mt-10">
                            <div className="bg-[#DFE2FF] rounded-lg relative w-full p-5 mb-3 flex flex-col">
                                <Image src="/icons/AvatarMenu.webp" alt="Desarrollo Global" width={100} height={100} className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4" />
                                <p className="font-bold text-center mt-20">Menbresia Premium</p>
                                <p className="text-sm text-center">Accede a nuestra membresía y accede a todos nuestros programas en gestión pública por 1 año.</p>
                                <button className="bg-infoDesa p-2 text-center text-white rounded-md mx-auto mt-3">Mas Detalles</button>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}