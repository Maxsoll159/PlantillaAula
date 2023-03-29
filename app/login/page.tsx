import { FromLogin } from './components'
import Image from 'next/image';

export default function Hola() {
    return (
        <>
            <section className="flex items-center h-screen">
                <div className='h-full w-1/2 flex items-center justify-between'>
                    <div className='mx-auto'>
                        <Image unoptimized src="https://nuevapagina.s3.amazonaws.com/DG-Logotipo_Color.webp" width={200} height={200} alt="Desarrollo Global" className='mx-auto' />
                        <h1 className='font-black text-2xl text-center mt-5'>Aula Virtual</h1>
                        <p className="text-gray-500 mt-5 w-1/2 mx-auto">Ingresa a tu Aula Virtual y sigue aprendiendo y mejorando tus competencias profesionales.</p>
                        <FromLogin />
                    </div>
                </div>
                <div className='bg-[#F7FAFC] h-full w-1/2 flex justify-center flex-col'>
                    <div>
                        <div className='px-28'>
                            <p className='font-black text-2xl'>Empieza a aprender ahora</p>
                            <p className='text-gray-400 mt-2 '>Elige tus curso</p>
                            <img src="./punto.jpg" alt="Aula Virtual" className='my-5' width={30} />
                            <img src="./ImgLogin.jpg" alt="Aula Virtual" className=' h-[30%] mt-3' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}