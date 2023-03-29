import Image from "next/image"

export const Notificaciones = () => {
    return (
        <div className="w-[27%] shadow-lg border rounded-md bg-white">
            <div className="p-5">
                <p className="text-xl font-bold">Docente:</p>
                <div className="mt-3 flex items-center gap-3 border p-3 rounded-md">
                    <Image unoptimized src="https://archivos-comunes.s3.amazonaws.com/2020/fotos-docentes/IVAN-FLORES.jpg" width={50} height={50} alt="Juan Perez" className="rounded-full border" />
                    <div className="w-full flex justify-between items-center">
                        <div>
                            <p className="font-bold">Ivan Florez</p>
                            <p>Ingeniero de Sistemas</p>
                            <p className="flex items-center"><i className="fi fi-ss-star text-yellow-400"></i><i className="fi fi-ss-star text-yellow-400"></i><i className="fi fi-ss-star text-yellow-400"></i><i className="fi fi-ss-star"></i><i className="fi fi-ss-star"></i></p>
                        </div>
                        <i className="fi fi-rr-social-network text-2xl"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div className="h-3/4 p-5">
                <p className="text-xl font-bold">Recordatorios:</p>
                <div className="w-full border p-3 mt-3 flex items-center justify-between text-red-500 border-red-500 rounded-md">
                    <div className="p-4 border w-[18%] rounded-full flex items-center justify-center border-red-500">
                        <i className="fi fi-rr-question-square text-xl flex"></i>
                    </div>
                    <div className="">
                        <p className="font-bold">Practica N°1</p>
                        <p className="text-sm">Su practica comenzara en 20 minutos</p>
                    </div>
                </div>

                <div className="w-full border p-3 mt-3 flex items-center gap-5 text-blue-500 border-blue-500 rounded-md">
                    <div className="p-4 border w-[18%] rounded-full flex items-center justify-center border-blue-500">
                        <i className="fi fi-rr-play text-lg flex"></i>
                    </div>
                    <div className="">
                        <p className="font-bold">Clase N°2</p>
                        <p className="text-sm">Su clase comienza el 28/03/2023 a las 9:00 pm</p>
                    </div>
                </div>

                <div className="w-full border p-3 mt-3 flex items-center gap-5 text-violet-500 border-violet-500 rounded-md">
                    <div className="p-4 border w-[18%] rounded-full flex items-center justify-center border-violet-500">
                        <i className="fi fi-rr-diploma flex text-xl"></i>
                    </div>
                    <div className="">
                        <p className="font-bold">Certificado</p>
                        <p className="text-sm">Su Certificado ya se encuentra para descargar</p>
                    </div>
                </div>

                <div className="w-full border p-3 mt-3 flex items-center justify-between text-green-500 border-green-500 rounded-md">
                    <div className="p-4 border w-[18%] rounded-full flex items-center justify-center border-green-500">
                        <i className="fi fi-rr-usd-circle flex text-xl"></i>
                    </div>
                    <div className="">
                        <p className="font-bold">Pago Pendiente</p>
                        <p className="text-sm">Tiene un pago pendiente por realizar.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}