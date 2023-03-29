import Image from "next/image";

export default function Menu() {
    return (
        <div className="bg-blue-100 lg:flex xl:flex flex-col w-[16%] h-screen hidden">
            <div className="p-4">
                <Image src="https://download-archivos.s3.amazonaws.com/logo-bg-logo.png" width={220} height={80} alt="Desarrollo Global" unoptimized />
            </div>
            <div className="flex flex-col justify-between h-full mt-5 px-6">
                <div className="space-y-3">
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-home flex"></i>
                        Home
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-layers flex"></i>
                        Cursos
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-graduation-cap flex"></i>
                        Diplomas
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-badge flex"></i>
                        Diplomados
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-gift flex"></i>
                        Obsequios
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-calendar-clock flex"></i>
                        Calendario
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-tags flex"></i>
                        Pagos
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-diploma flex"></i>
                        Certificacion
                    </button>
                    <button className="flex items-center gap-3 font-semibold text-lg focus:bg-blue-600 rounded-md py-1 w-full pl-3 focus:text-white">
                        <i className="fi fi-rr-user flex"></i>
                        Perfil
                    </button>
                </div>
                <div>
                    <Image src="https://nuevapagina.s3.amazonaws.com/mascota.webp" width={700} height={900} alt="Desarrollo Global" unoptimized className="" />
                </div>
            </div>

        </div>
    )
}