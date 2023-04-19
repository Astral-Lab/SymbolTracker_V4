import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavButton = ({text, color, path}) => {
    console.log(path)
    console.log("Btn re-rendered")
    // function should be redefined every render, so we are fine
    const handleClick = (text) => {
        console.log('handle click fired')
        // only run if path prop has a value and is not null, otherwise we'd be incrementing for no reason!
        // check if btn is next or back
        /**
         * Get the selectedSymbols from localStorage.
         * This is safe, as by this stage localStorage will store the complete object with all its paths
         * Create a new object with the value of current updated to point to the next path in the paths array
         * Store the new object in localStorage, so next button can access lastest data
         */
        const selected = JSON.parse(localStorage.getItem("selectedSymbols"));
        // const updatedSelected = { ...selected, current: text === "Next" ? selected.current < selected.paths.length - 1 ? selected.current + 1 : selected.current : text === "Back" ? selected.current > 0 ? selected.current - 1 : selected.current : null};

        // test only next for now
        const updatedSelected = { ...selected, current: selected.current < selected.paths.length - 1 ? selected.current + 1 : selected.current };
        console.log(updatedSelected)
        localStorage.setItem("selectedSymbols", JSON.stringify(updatedSelected));
    }

    return (
        <Link to={path}>
            <div 
                className={`w-[128px] h-[64px] ${color} grid place-content-center rounded-md`}
                onClick={handleClick}
                >
                {text}
            </div>
        </Link>
    )
};

export default NavButton;