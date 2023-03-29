
import {Notificaciones, Opciones} from './components'

export default function Info({ params }: any) {
    const { id } = params
    console.log(id)
    return (
        <div className="px-10 py-3 overflow-auto h-[91vh] bg-gray-50">
            <div className="flex w-full items-start justify-between">
                <Opciones />
                <Notificaciones />
            </div>


        </div>
    )
}