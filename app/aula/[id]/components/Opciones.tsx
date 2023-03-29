import Image from "next/image"
import {Sesiones} from './'

export const Opciones = () => {
    return (
        <div className="w-[70%]">

            <div className='flex w-full items-center shadow-sm rounded-md justify-between py-5 px-10 border bg-white'>
                <div className="flex items-end gap-3">
                    <Image alt='PRESUPUESTO PÚBLICO EN EL SIAF' src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/12/logo_curso_presupuesto_publico_siaf.png" width={60} height={60} />
                    <div className="text-blue-800 font-bold">
                        <p className="flex items-center gap-2"><i className="fi fi-rr-play-alt flex"></i>Curso virtual</p>
                        <p>PRESUPUESTO PÚBLICO EN EL SIAF</p>
                    </div>
                </div>
                <div className="text-blue-800 font-semibold">
                    <p>0 de 6 Sesiones Completadas</p>
                    <div className="w-full bg-gray-200 rounded-full h-1  dark:bg-gray-300 mt-2">
                        <div className="bg-blue-600 h-1 rounded-full w-0"></div>
                    </div>
                </div>
            </div>

            <div className="w-full flex mt-5 justify-between flex-wrap">
                <button className="flex items-center gap-2 px-10 text-lg border py-2 bg-gray-100 text-gray-500 font-semibold rounded-md focus:text-blue-500 focus:border-blue-500">
                    <i className="fi fi-rr-play-alt flex"></i>
                    Sesionesasd
                </button>
                <button className="flex items-center gap-2 px-10 text-lg border py-2 bg-gray-100 text-gray-500 font-semibold rounded-md focus:text-blue-500 focus:border-blue-500">
                    <i className="fi fi-rr-cloud-download-alt flex"></i>
                    Materiales
                </button>
                <button className="flex items-center gap-2 px-10 text-lg border py-2 bg-gray-100 text-gray-500 font-semibold rounded-md focus:text-blue-500 focus:border-blue-500">
                    <i className="fi fi-rr-test flex"></i>
                    Evaluaciones
                </button>
                <button className="flex items-center gap-2 px-10 text-lg border py-2 bg-gray-100 text-gray-500 font-semibold rounded-md focus:text-blue-500 focus:border-blue-500">
                    <i className="fi fi-rr-people-poll flex"></i>
                    Encuestas
                </button>
            </div>
            <Sesiones tipo="Realizado" />
            <Sesiones tipo="Pendiente" />
            <Sesiones tipo="Pendiente" />
            <Sesiones tipo="Pendiente" />
            <Sesiones tipo="Pendiente" />
            <Sesiones tipo="Pendiente" />
            <Sesiones tipo="Pendiente" />
            
          
            
        </div>
    )
}