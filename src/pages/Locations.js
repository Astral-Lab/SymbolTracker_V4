import { useState } from "react";
import LocationGrid from "../components/LocationGrid";
import Location from "../components/Location";

export default function Locations({ raid }) {
    const [selected, setSelected] = useState([]);
    const [index, setIndex] = useState(-1);
    const locationOrder = [...selected].sort((a, b) => a - b);
    console.log(locationOrder) // sorting does not work when multiple options are available

    // handlers
    const handleSelect = (locationIndex) => {
        // was an already selected location clicked?
        if(selected.includes(locationIndex)) {
            setSelected(selected.filter(s => s !== locationIndex));
            return;
        };

        // check if the selected location already contains an option for the clicked location (i.e. light/dark in RoN)
        const option = selected.find(s => raid.locations[s].option === raid.locations[locationIndex].option);

        // if so, then remove the location from the selected ones and push the new location option
        if(option) {
            setSelected([...selected.filter(s => s !== option), locationIndex]);
            return;
        };

        // the max number of symbols have been selected
        if(selected.length !== raid.select) {
            setSelected([...selected, locationIndex]);
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
            <div className="w-full lg:max-w-[500px] h-full lg:h-[650px] bg-dark-four shadow-md">
                {index === -1 ? (
                    <LocationGrid 
                        raid={raid}
                        selected={selected}
                        handleSelect={handleSelect}
                        handleRightClick={handleRightClick}
                    />
                ) : (
                    <Location 
                        location={raid.locations[locationOrder[index]]} 
                        handleLeftClick={handleLeftClick} 
                        handleRightClick={handleRightClick} 
                        finalLocation={index === raid.select - 1}
                    />
                )}
            </div>
        </div>
    )
}