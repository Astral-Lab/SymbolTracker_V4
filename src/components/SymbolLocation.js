import NavButton from "./NavButton";
import { useEffect, useState } from 'react';

const SymbolLocation = ({image, iframe, description}) => {
    // Having state here does not make sense, as there's no data we need to persist thoughout renders, in fact, we don't need to even re-render on this page
    const selected = JSON.parse(localStorage.getItem("selectedSymbols"));
    // Add in bound checking!
    const backPath = selected.current > 0 ? selected.paths[selected.current] : "/";
    const nextPath = selected.current < selected.paths.length - 1 ? selected.paths[selected.current + 1] : "/";

    console.log("SymbolLocation Re-render triggered!")

    return (
        <div className="grow flex flex-col justify-center items-center text-white text-2xl gap-4">
            <img
                src={image}
                alt=""
            />
            <iframe 
                src={iframe}
                className="w-screen aspect-video mt-2"
            />
            <p 
                className="p-4 text-cente r tracking-wide"
            >
                {description}
            </p>
            <div className="flex justify-between gap-16">
                <NavButton
                    text={"Back"}
                    color={"bg-red-700"}
                    path={backPath}
                    key={backPath}
                />
                <NavButton
                    text={"Next"}
                    color={"bg-green-700"}
                    path={nextPath}
                    key={nextPath}
                />
            </div>
        </div>
    )
};

export default SymbolLocation;