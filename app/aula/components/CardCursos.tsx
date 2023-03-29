import Image from "next/image";
export const CardCursos = () => {
    return (
        <div className="w-auto mt-5 shadow-lg">
            <div className="bg-white p-2 rounded-md relative">
                <div className="absolute bg-violet-500 text-white p-1 rounded-xl font-semibold right-5 top-5">Diploma</div>
                <Image src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/07/Edited_20210730_095455.jpg" alt="Desarrollo Global" width={350} height={350} unoptimized />
                <div className="p-4">
                    <p className="font-semibold text-lg">[1723] SIAF RP 2023 - NIVEL BÁSICO</p>
                    <div className="mt-5 flex justify-between">
                        <p className="font-semibold text-lg flex items-center gap-2"><i className="fi fi-rr-calendar-clock flex"></i><span>15 de Marzo</span></p>
                        <p className="text-red-500 font-semibold text-lg flex items-center gap-2"><i className="fi fi-rs-book-alt flex"></i><span>En Curso</span></p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-100 mt-3 h-2">
                        <div className="bg-violet-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full w-1/2 h-2"></div>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <p className="flex items-center gap-3">
                            <i className="fi fi-rr-play-alt flex"></i>
                            10 Sesiones
                        </p>
                        <p className="">
                            6/10 Completadas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}