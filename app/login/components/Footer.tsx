import Image from "next/image"

export const Footer = () => {
    return (
        <>
            <div className="bg-blue-500 py-9">
                <div className="container mx-auto">
                    <div className="text-white flex justify-between font-bold ">
                        <p>Blog</p>
                        <p>Políticas de Protección de Datos Personales</p>
                        <p>Terminos de servicio</p>
                        <p>Políticas de Cookies</p>
                        <div className="flex items-center gap-2">
                            <Image width={30} height={30} alt="Desarrollo Global" unoptimized src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2020/11/librito-2.png"/>
                            <p>Libro de Reclamaciones</p>
                        </div>
                    </div>
                    <p className="text-white text-center font-bold">Copyright © 2011 - 2023 CENTRO DE CAPACITACIÓN Y DESARROLLO GLOBAL</p>
                </div>
            </div>
        </>
    )
}