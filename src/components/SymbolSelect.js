import { useEffect, useState } from 'react';
import Symbol from './Symbol';
import NavButton from './NavButton';

const SymbolSelect = ({symbolData, theme}) => {
    // If selectedSymbols already exists, due to user navigating back after first symbols, or visiting another site and coming back, otherwise load fresh object
    const [selectedSymbols, setSelectedSymbols] = useState(JSON.parse(localStorage.getItem("selectedSymbols")) || {paths: [], current: -1});
    // path can be derived from selectedSymbols, so no need to use useState hook. Shall we call it coupled state?
    const path = selectedSymbols.paths.length === 3 ? selectedSymbols.paths[0] : "";
    
    useEffect(() => {
        localStorage.setItem("selectedSymbols", JSON.stringify(selectedSymbols))
    }, [selectedSymbols]);

    return (
        <div className="w-full flex-grow flex flex-col items-center justify-center gap-8 text-white text-3xl">
            <h1>Select Three Symbols</h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    symbolData.map((symbol, i) => 
                    <Symbol 
                        imageSrc={symbol.image}
                        path={symbol.path}
                        borderTheme={theme} 
                        key={i} // this is safe as the order does not change
                        selectedSymbols={selectedSymbols}
                        setSelectedSymbols={setSelectedSymbols}
                    />)
                }
            </div>
            <NavButton
                text={"Next"}
                // Add in low opacity green here
                color={selectedSymbols.paths.length === 3 ? "bg-green-700" : "null"}
                path={path}
            />
        </div>
    )
};

export default SymbolSelect;