import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="w-full sticky inset-0 shrink-0 h-14 lg:h-auto flex justify-center group/parent py-8 lg:py-12 bg-dark-three z-20">
            <div className="w-full lg:max-w-[1200px] bg-dark-three flex justify-between items-center px-5 lg:px-0">
                <Link to={"/"}>
                    <h1 className="text-white-main lg:text-2xl transition-colors duration-500 hover:text-epic-blue hover:cursor-pointer">SymbolTracker</h1>
                </Link>
                <Navigation/>
                <Hamburger/>
            </div>
        </header>
    )
}