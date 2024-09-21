import { useNavigate } from "react-router-dom"

export default function Location({ 
    location,
    handleLeftClick,
    handleRightClick,
    finalLocation
}) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col justify-between items-center gap-8 pt-8">
            <img
                className="w-20"
                src={location.icon}
                alt=""
            />
            <div>
                <div className="w-full aspect-video bg-dark-two">
                    <iframe
                        className="w-full h-full"
                        src={location.iframe}
                        title={location.name}
                    />
                </div>
                <div className="grow p-6">
                    <p className="text-sm mb-1">description</p>
                    <p className="text-sans font-sans text-lg capitalize">{location.desc}</p>
                </div>
            </div>
            <div className="w-full grow flex flex-col justify-end p-6">
                <div className="flex gap-2">
                    <button 
                        className="w-1/2 h-12 border-[1px] border-epic-red-back rounded-lg bg-epic-red-back text-epic-red text-center leading-[48px] uppercase text-sm"
                        onClick={handleLeftClick}
                    >back</button>
                    {finalLocation ? (
                        <button 
                            className="w-1/2 h-12 border-[1px] border-epic-green-back rounded-lg bg-epic-green-back text-epic-green text-center leading-[48px] uppercase text-sm"
                            onClick={() => navigate("/")}
                        >home</button>
                    ) : (
                        <button 
                            className="w-1/2 h-12 border-[1px] border-epic-blue-back rounded-lg bg-epic-blue-back text-epic-blue text-center leading-[48px] uppercase text-sm"
                            onClick={handleRightClick}
                        >next</button>
                    )}
                </div>
            </div>
        </div>
    )
}