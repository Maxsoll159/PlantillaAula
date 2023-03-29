export const Search = () => {
    return (
        <form action="">
            <div className="flex items-center h-full py-3 px-4 gap-3 bg-gray-100 rounded-lg xl:w-80 lg:w-80 w-auto">
                <i className="fi fi-br-search flex text-lg text-gray-400"></i>
                <input type="text" className="outline-none bg-transparent w-full" placeholder="Buscar curso....." />
            </div>
        </form>
    )
}
