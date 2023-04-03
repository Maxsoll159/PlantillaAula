export const Opciones = () => {
    return (
        <div className="w-full border border-black rounded-md bg-white">
            <div className="flex w-full justify-between border border-t-0 border-l-0 border-r-0 border-b-black">
                <button className="flex items-center gap-3 px-14 text-base font-semibold py-2 focus:bg-black focus:text-white">
                    <i className="fi fi-rr-folder flex text-xl"></i>
                    Materiales
                </button>
                <button className="flex items-center gap-3 px-14 text-base font-semibold py-2 focus:bg-black focus:text-white">
                    <i className="fi fi-rr-test flex text-xl"></i>
                    Evaluaciones
                </button>
                <button className="flex items-center gap-3 px-14 text-base font-semibold py-2 focus:bg-black focus:text-white">
                    <i className="fi fi-rr-comment-alt flex text-xl"></i>
                    Comentarios
                </button>
                <button className="flex items-center gap-3 px-14 text-base font-semibold py-2 focus:bg-black focus:text-white">
                    <i className="fi fi-rr-question-square flex text-xl"></i>
                    Encuesta
                </button>
            </div>

            <div className="w-full p-5">
                <p className="text-sm text-gray-500">Haz clic sobre cada enlace y descarga tus materiales de la sesión</p>


                <table className="w-full mt-3">
                    <thead>
                        <tr className="bg-gray-200 rounded-xl">
                            <th className="text-start px-5 py-2">Nombre del archivo</th>
                            <th>Formato</th>
                            <th>Peso archivo</th>
                            <th>Descargar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-blue-500 px-5">MATERIAL SESIÓN 01- 03.pdf</td>
                            <td className="text-center">PDF</td>
                            <td className="text-center">2.5 MB</td>
                            <td className="text-center text-2xl"><i className="fi fi-rs-file-pdf"></i></td>
                        </tr>
                        <tr>
                            <td className="text-blue-500 px-5">LIBRERIAS SIAF.rar</td>
                            <td className="text-center">RAR</td>
                            <td className="text-center">45 MB</td>
                            <td className="text-center text-2xl"><i className="fi fi-rs-file-pdf"></i></td>
                        </tr>
                        <tr>
                            <td className="text-blue-500 px-5">DEMO SIAF 2023.exe</td>
                            <td className="text-center">RAR</td>
                            <td className="text-center">1.20 GB</td>
                            <td className="text-center text-2xl"><i className="fi fi-rs-file-pdf"></i></td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}