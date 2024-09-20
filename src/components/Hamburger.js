import {
    useRef,
    useEffect
} from "react";
import { useLocation } from "react-router-dom";

export default function Hamburger() {
    const menuRef = useRef();
    const location = useLocation();

    useEffect(() => {
        menuRef.current.checked = false;
    }, [location]);

    return (
        <div className="w-14 h-14 lg:hidden flex flex-col justify-center items-end gap-1 relative">
            <input
                id="menu"
                className="w-full h-full absolute inset-0 opacity-0 peer/menu z-10"
                type="checkbox"
                ref={menuRef}
            />
            <div className="w-12 h-[2px] bg-epic-blue -skew-x-[30deg] transition-transform duration-300 peer-checked/menu:translate-y-[3px]"></div>
            <div className="w-8 h-[2px] bg-epic-blue -skew-x-[30deg] transition-all duration-300 peer-checked/menu:-translate-y-[3px] peer-checked/menu:w-12"></div>
        </div>
    )
}