

import {Progreso, CardCursos, Filtros} from './components'
export default function PageDas() {
  return (
    <section className="pb-5 overflow-auto">
      <div className="flex w-auto justify-between mt-3 items-center">
        <div>
          <p className='text-black font-semibold text-2xl'>👋 Hola, <span className="font-bold text-blue-500">Martin!</span></p>
          <p className="text-gray-400">Aqui encontraras todos los cursos que adquiristes</p>
        </div>
        <div className="bg-red-200 rounded-md p-5 w-1/3 flex text-red-600 items-center gap-3">
          <i className="fi fi-rr-bell-school flex text-3xl"></i>
          <p className="text-base gap-2 text-justify">Tu clase de <span className="font-bold">PRESUPUESTO PÚBLICO EN EL SIAF</span> comienza el 27/03/2023</p>
        </div>
      </div>

      <Progreso />

      <Filtros />


      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-4 flex-wrap">
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />
        <CardCursos />



      </div>
    </section>
  )
}
