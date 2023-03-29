"use client"
import Image from "next/image";
import { useState } from "react";
import { Search } from "./Search";

export default function Navbar() {
    const [perfil, setPerfil] = useState<boolean>(false)
    console.log(perfil)

    return (
        <>
            <nav className="flex items-center justify-between w-full px-5 py-3 bg-white flex-wrap">
                <div className="px-5">
                    <Image src="/LogoVer.png" width={50} height={0} alt="Desarrollo Global" className="xl:hidden lg:hidden" unoptimized />
                    <div>
                        <p className="text-xl">Hola <span className="text-blue-500 font-bold">Juan</span></p>
                        <p className="text-gray-400">¿Listo para seguir Aprendiendo?</p>
                    </div>
                </div>
                <div className="flex flex-wrap xl:gap-5 lg:gap-5 gap-1">
                    <Search />
                    <button className="p-4 focus:bg-blue-200 flex items-center rounded-lg focus:text-blue-600 text-gray-400 bg-gray-100 relative">
                        <i className="fi fi-rs-bell flex text-lg"></i>
                        <span className="absolute text-white bg-red-500 rounded-full text-[11px] w-5 h-5 flex items-center justify-center left-3/4 -top-1 icon-noti">
                            <div className="font-bold icon-noti">0</div>
                        </span>
                    </button>
                    <button className="focus:bg-blue-200 p-1 rounded-lg focus:text-blue-500 text-gray-400 flex items-center gap-2 px-3 bg-gray-100" onClick={() => setPerfil(!perfil)}>
                        <Image src="https://aula.desarrolloglobal.pe/public/files/avatar.jpg" alt="Desarrollo Global" width={40} height={40} unoptimized className="rounded-full" />
                    </button>
                    <button className="p-3 rounded-lg text-gray-400 focus:text-blue-800 flex items-center xl:hidden lg:hidden">
                        <i className="fi fi-rr-bars-sort flex"></i>
                    </button>
                </div>
            </nav>


            <div className={`absolute w-56 right-10 rounded-md transition-all bg-white    ${perfil ? "top-16" : "-top-60"}`}>
                <div className="w-full text-white bg-[#0E2FAA] p-4 flex items-center justify-center gap-3">
                    <Image src="https://aula.desarrolloglobal.pe/public/files/avatar.jpg" alt="Desarrollo Global" width={40} height={40} unoptimized className="rounded-full" />
                    <div>
                        <p className="text-center font-bold">Martin Rios</p>
                        <p className="">Alumno</p>
                    </div>
                </div>
                <div className="shadow-md py-3">
                    <button className="flex items-center gap-2 text-[#646c9a] w-full px-5 focus:bg-blue-100 py-1 hover:bg-blue-100 hover:text-blue-500">
                        <i className="fi fi-rr-computer flex"></i>
                        <p>Mi Aula</p>
                    </button>
                    <button className="flex items-center gap-2 text-[#646c9a] w-full px-5 focus:bg-blue-100 py-1 hover:bg-blue-100 hover:text-blue-500">
                        <i className="fi fi-rr-user flex"></i>
                        <p>Mi Perfil</p>
                    </button>
                    <button className="flex items-center gap-2 text-[#646c9a] w-full px-5 focus:bg-blue-100 py-1 hover:bg-blue-100 hover:text-blue-500">
                        <i className="fi fi-rr-calendar-clock flex"></i>
                        <p>Sesion Hoy y mañana</p>
                    </button>
                    <button className="flex items-center gap-2 text-[#646c9a] w-full px-5 focus:bg-blue-100 py-1 hover:bg-blue-100 hover:text-blue-500">
                        <i className="fi fi-br-power flex"></i>
                        <p>Cerrar Sesión</p>
                    </button>


                </div>
            </div>

        </>
    )
}