import Menu from "@/components/Navbar/Menu";
import Navbar from "@/components/Navbar/Navbar"

import "../../node_modules/@flaticon/flaticon-uicons/css/all/all.css";


export default function LayputDasboard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex">
                    <Menu />
                    <div className="w-screen h-screen">
                        <Navbar />
                        <div className="px-10 py-3 overflow-auto h-[92vh] bg-gray-50 pb-5">
                            <div className="flex w-full items-start justify-between">
                                {children}
                            </div>
                        </div>

                    </div>
                </div>
            </body>
        </html>
    )
}
