import Image from 'next/image';
interface Props {
    tipo: string
}
export const Sesiones = ({ tipo }: Props) => {
    return (
        <div className='mt-5'>
            <div className="flex shadow-md border items-center text-gray-500 justify-between bg-white rounded-md">
                <div className='flex items-center'>
                    <div className='p-5 border-r-2 boder-t-0 border-l-0 boder-b-0'>
                        <Image src="/play.webp" width={50} height={50} alt="DESARROLLO GLOBAL" />
                    </div>
                    <div className='pl-5'>
                        <h1 className='font-bold'>SESIÓN 01:</h1>
                        <p className='text-base'>Bases Para La Formulación De Las Políticas Públicas</p>
                        <div className='flex gap-2 justify-between items-center text-sm'>
                            <p className={`${tipo === "Realizado" && "text-red-500"}`}>{tipo === "Realizado" ? "Realizado" : "Proxima sesión 30 de Julio"}</p>
                            <div className='w-0.5 bg-gray-400 h-4'></div>
                            <p>18:45 pm</p>
                            <div className='w-0.5 bg-gray-400 h-4'></div>
                            <p>1 evaluación</p>
                        </div>
                    </div>
                </div>
                <div className='pr-5 w-[20%]'>
                    {
                        tipo === "Realizado" ? (<button className="border border-red-500 text-red-500 p-2 rounded-md font-semibold flex items-center gap-3 w-full justify-center"><i className="fi fi-sr-play flex"></i>Ver clase en vivo</button>) : (<button className="border border-blue-500 text-blue-500 p-2 rounded-md font-semibold flex items-center gap-3 w-full justify-center"><i className="fi fi-rr-eye flex"></i>Ver Sesion</button>)
                    }
                </div>
            </div>
        </div>
    )
}