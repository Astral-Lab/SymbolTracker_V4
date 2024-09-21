import { Outlet } from "react-router-dom";
import Header from "./Header";

// on location change close navigation menu
export default function Layout() {
    return (
        <div className="w-full min-h-screen h-0 bg-dark-three flex flex-col items-center font-fugaz text-white-main uppercase overflow-y-scroll scrollbar-hide">
            <Header/>
            <main className="w-full shrink-0 grow relative lg:pb-16">
                <Outlet/>
                <div className="w-full h-full flex justify-between absolute inset-0">
                    <div className="w-full h-full relative bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
            </main>
        </div>
    )
}