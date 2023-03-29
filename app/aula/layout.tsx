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
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
