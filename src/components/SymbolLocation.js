import NavButton from "./NavButton";

const SymbolLocation = ({image, iframe, description}) => {
    const selected = JSON.parse(localStorage.getItem("selectedSymbols"));
    const path = window.location.pathname;
    console.log(path);
    console.log(selected)
    const backPath = selected.current > 0 ? selected.paths[selected.current - 1] : `${path.slice(0, path.lastIndexOf('/'))}select`;
    const nextPath = selected.current < selected.paths.length - 1 ? selected.paths[selected.current + 1] : "/";
    const isLast = selected.current === selected.paths.length - 1;

    // useEffect(() => {
    //     // put side effect in here instead, no need to block rendering
    // }, [])

    console.log("SymbolLocation Re-render triggered!")

    return (
        <div className="grow flex flex-col justify-center items-center text-white text-2xl gap-4">
            <img
                className="w-24"
                src={image}
                alt="symbol"
            />
            <iframe 
                src={iframe}
                className="w-screen aspect-video mt-2"
                title="Video showing where the symbol is located"
            />
            <p 
                className="p-4 text-center tracking-wide"
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
                    text={isLast ? "Home" : "Next"}
                    color={isLast ? "bg-blue-500" : "bg-green-700"}
                    path={nextPath}
                    key={nextPath}
                />
            </div>
        </div>
    )
};

export default SymbolLocation;