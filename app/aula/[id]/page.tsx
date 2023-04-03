
import Image from 'next/image';
import { Opciones, SesionesCur, VideoSesion } from './components';

export default function Info({ params }: any) {
    const { id } = params
    return (
        <div className="w-full flex justify-between pt-2 ">
            <div className="w-[67%]">
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Image src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/04/SIAF19Recurso%208-1.png" alt='SIAF BASICO' width={60} height={60} />
                        <div>
                            <p className='font-bold'>Sistema Integrado de Gestion Administrativa - SIGA Logistico</p>
                            <p className='text-gray-400'>Sesion 0: Introduccion e instalacion del DEMO SIGA</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image unoptimized src="https://archivos-comunes.s3.amazonaws.com/2019/profesores/WILBER-CORONADO.jpg" alt='Juan perez' width={60} height={60} className="rounded-full" />
                        <div>
                            <p className='font-bold'>Docente</p>
                            <p className='text-gray-400'>Juan Camaney Gonzales</p>
                        </div>
                    </div>
                </div>

                <VideoSesion />
                <Opciones />


            </div>
            <div className="w-[30%] bg-white">
                <div className='p-5 text-gray-500 text-xl'>
                    <h1>Contenido del Curso</h1>
                </div>
                <hr />

                <SesionesCur />



            </div>

        </div>
    )
}