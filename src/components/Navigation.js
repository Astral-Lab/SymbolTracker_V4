import { Link } from "react-router-dom"
import { RiTwitterXLine } from "react-icons/ri";
import { RAIDS_CONFIG } from "../lib/config";

export default function Navigation() {
    const navLinks = RAIDS_CONFIG.map(raid => (
        <li key={raid.name}>
            <Link
                to={`/raid/${raid.name}`}
                className="text-white-main font-bold text-xl"
            >{raid.name}</Link>
        </li>
    ));

    return (
        <div className="w-full lg:w-auto h-[calc(100vh_-_56px)] lg:h-auto flex flex-col justify-between items-center bg-dark-three p-8 lg:p-0 absolute lg:static top-14 -right-full transition-all duration-300 group-[:has(:checked)]/parent:right-0">
            <ul className="w-full flex flex-col gap-8 lg:hidden">{navLinks}</ul>
            <div className="flex gap-3">
                <Link 
                    to={"https://x.com/_astral_labs"} 
                    className="hover:cursor-pointer"
                >
                    <RiTwitterXLine size={"32px"} color="#26bbff"/>
                </Link>
            </div>
        </div>
    )
}