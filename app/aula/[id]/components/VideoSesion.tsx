import Image from "next/image"

export const VideoSesion = () => {
    return (
        <>
            <div className='w-full mt-3  rounded-md h-[35rem]'>
                <iframe className='w-full rounded-md h-full'
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>

            <div className='w-full flex p-5 justify-between'>
                <div className='flex justify-between items-center gap-6'>
                    <Image src="/icons/estrellas.webp" alt='Desarrollo Global' width={70} height={40} />
                    <div className='flex items-center gap-1'>
                        <i className="text-gray-400 fi fi-rr-eye text-lg flex"></i>
                        <p className='text-infoDesa font-bold text-sm'>609</p>
                    </div>
                    <div className='flex items-center gap-1 text-infoDesa'>
                        <i className="fi fi-sr-down-to-line text-base flex"></i>
                        <p className='text-sm'>Descargar</p>
                    </div>
                    <button className='border border-infoDesa text-infoDesa rounded-full bg-white px-2 font-semibold flex items-center gap-2 hover:text-white hover:bg-infoDesa'>
                        <i className="fi fi-br-check text-sm flex"></i>
                        Asistencia Marcada
                    </button>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 text-gray-400 text-sm'>
                        <p>Anterior</p>
                        <div className='bg-[#2699FB] h-7 w-7 rounded-full text-white flex items-center justify-center hover:bg-infoDesa'>
                            <i className="fi fi-sr-play rotate-180 flex"></i>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400 text-sm'>
                        <div className='bg-[#2699FB] h-7 w-7 rounded-full text-white flex items-center justify-center hover:bg-infoDesa'>
                            <i className="fi fi-sr-play flex"></i>
                        </div>
                        <p>Siguiente</p>
                    </div>
                </div>



            </div>
        </>
    )
}