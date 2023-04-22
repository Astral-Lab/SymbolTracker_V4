import { useState } from 'react';

const Symbol = ({imageSrc, path, borderTheme, selectedSymbols, setSelectedSymbols}) => {
    const [selected, setSelected] = useState(selectedSymbols.paths.includes(path));

    const handleClick = () => {
        // Root has the special case that only one symbol can be selected per column.
        // only do this work if isRoot is true
        // Get currently selected symbols
        // Extract the number part of the path and cast to number and put in new array
        // For each value in the array, if even check -1 against prop path or +1 if odd
        // If true then keep false.
        const isRoot = window.location.pathname.includes("rootselect");
        let canSelect = false;

        if(isRoot) {
            console.log("Extra Code!")
            const numPaths = selectedSymbols.paths.map(path => Number(path.slice(path.length -1, path.length)));
            // Get prop path and cast to number by extracting integer part
            const thisNumPath = Number(path.slice(path.length - 1, path.length));
            canSelect = numPaths.filter((num) => num % 2 ? num + 1 === thisNumPath : num - 1 === thisNumPath).length;
        }
        if(selectedSymbols.paths.length < 3 && !selected && !canSelect) {
            setSelected(true);
            setSelectedSymbols({...selectedSymbols, paths: [...selectedSymbols.paths, path].sort((path1, path2) => Number(path1[path1.length - 1]) - Number(path2[path2.length - 1]))})
        } else {
            setSelected(false);
            setSelectedSymbols({...selectedSymbols, paths: selectedSymbols.paths.filter(thisPath => thisPath !== path)})
        }
    };
    
    return (
        <div 
            className={`w-[25vmin] h-[25vmin] max-w-[130px] max-h-[130px] p-2 border-2 border-${borderTheme}`}
            style={ selected ? { background: "white" } : null }
            onClick={handleClick}
            tabIndex="0"
        >
            <img
                src={imageSrc}
                alt="the symbol"
            />
        </div>
    )
};

export default Symbol;