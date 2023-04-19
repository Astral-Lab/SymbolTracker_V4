import { useState } from 'react';

const Symbol = ({imageSrc, path, borderTheme, selectedSymbols, setSelectedSymbols}) => {
    const [selected, setSelected] = useState(selectedSymbols.paths.includes(path));

    const handleClick = () => {
        if(selectedSymbols.paths.length < 3 && !selected) {
            setSelected(true);
            setSelectedSymbols({...selectedSymbols, paths: [...selectedSymbols.paths, path]})
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
                alt=""
            />
        </div>
    )
};

export default Symbol;