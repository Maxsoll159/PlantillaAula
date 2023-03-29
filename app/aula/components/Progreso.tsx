export const Progreso = () => {
    return (
        <div className="flex mt-7 w-full justify-between flex-wrap space-y-5 lg:space-y-0">
            <div className="bg-green-100 flex px-14 py-7 rounded-lg items-center gap-5">
                <i className="fi fi-rr-layers text-5xl text-green-500"></i>
                <div className="font-semibold text-xl">
                    <p className="font-bold text-xl">21</p>
                    <p className="text-base font-medium">Cursos Completados</p>
                </div>
            </div>
            <div className="bg-red-100 flex px-14 py-7 rounded-lg items-center gap-5">
                <i className="fi fi-rr-graduation-cap text-5xl text-red-500"></i>
                <div className="font-semibold text-xl">
                    <p className="font-bold text-xl">02</p>
                    <p className="text-base font-medium">Diplomas Completados </p>
                </div>
            </div>
            <div className="bg-violet-100 flex px-14 py-7 rounded-lg items-center gap-5">
                <i className="fi fi-rr-badge text-5xl text-violet-500"></i>
                <div className="font-semibold text-xl">
                    <p className="font-bold text-xl">00</p>
                    <p className="text-base font-medium">Diplomados Completados </p>
                </div>
            </div>
            <div className="bg-blue-100 flex px-14 py-7 rounded-lg items-center gap-5">
                <i className="fi fi-rs-book-alt text-5xl text-blue-500"></i>
                <div className="font-semibold text-xl">
                    <p className="font-bold text-xl">01</p>
                    <p className="text-base font-medium">Cursos en proceso</p>
                </div>
            </div>
        </div>
    )
}