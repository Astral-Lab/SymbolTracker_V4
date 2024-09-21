import { useState } from "react";
import LocationGrid from "../components/LocationGrid";
import Location from "../components/Location";

export default function Locations({ raid }) {
    const [selected, setSelected] = useState([]);
    const [index, setIndex] = useState(-1);
    const locationOrder = [...selected].sort((a, b) => a.order - b.order);

    console.log(selected)

    // handlers
    const handleSelect = (location) => {
        // was an already selected location clicked?
        if(selected.find(l => l.name === location.name)) {
            setSelected(selected.filter(l => l.name !== location.name));
            return;
        };

        // check if the selected location already contains an option for the clicked location (i.e. light/dark in RoN)
        const option = selected.find(l => l.option === location.option);

        // if so, then remove the location from the selected ones and push the new location option
        if(option) {
            setSelected([...selected.filter(l => l.name !== option.name), location]);
            return;
        };

        // the max number of symbols have been selected
        if(selected.length !== raid.select) {
            setSelected([...selected, location]);
        };
    };

    const handleLeftClick = () => {
        setIndex(index - 1);
    };

    const handleRightClick = () => {
        setIndex(index + 1);
    };

    return (
        <div className="w-full h-full flex justify-center items-center z-10 relative">
            <div className="w-full lg:max-w-[500px] h-full lg:h-fit bg-dark-four shadow-md">
                {index === -1 ? (
                    <LocationGrid 
                        raid={raid}
                        selected={selected}
                        handleSelect={handleSelect}
                        handleRightClick={handleRightClick}
                    />
                ) : (
                    <Location 
                        location={locationOrder[index]} 
                        handleLeftClick={handleLeftClick} 
                        handleRightClick={handleRightClick} 
                        finalLocation={index === raid.select - 1}
                    />
                )}
            </div>
        </div>
    )
}