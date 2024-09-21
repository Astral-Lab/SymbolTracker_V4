import clsx from "clsx";

export default function LocationGrid({ 
    raid,
    selected,
    handleSelect,
    handleRightClick
}) {
    const showLocations = selected.length === raid.select;
    const symbols = raid.locations.map(location => (
        <div 
            key={location.name}
            className={clsx(
                "w-full aspect-square border-[1px] border-dark-border hover:cursor-pointer rounded-lg p-2",
                {
                    "bg-white-main": selected.find(l => l.name === location.name)
                }
            )}
            onClick={() => handleSelect(location)}
        >
            <img
                className="w-full h-full"
                src={location.icon}
                alt={`destiny 2 ${raid.name} ${location.name} icon`}
            />
        </div>
    ));

    return (
        <div className="w-full h-full flex flex-col justify-between items-center gap-12 p-8 lg:p-16">
            <div className="flex flex-col items-center gap-8">
                <p className="text-xl">select {raid.select} symbols</p>
                <div 
                    className="w-full grid gap-3 shrink"
                    style={{ gridTemplateColumns: `repeat(${raid.cols}, minmax(0, 1fr))`}}
                >{symbols}</div>
            </div>
            <button
                className={clsx(
                    "w-full lg:w-48 h-12 shrink-0 border-[1px] rounded-lg uppercase text-sm",
                    {
                        "border-epic-blue-back bg-epic-blue-back text-epic-blue": showLocations,
                        "border-epic-red-back bg-epic-red-back text-epic-red": !showLocations
                    }
                )}
                onClick={handleRightClick}
                disabled={!showLocations}
            >begin</button>
        </div>
    )
}