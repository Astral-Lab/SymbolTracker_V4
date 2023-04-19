const NotFound = () => {
    return (
        <div className="w-full grow flex flex-col justify-center items-center text-white">
            <p className="text-6xl mb-8">404</p>
            <div className="w-[50vmin] h-[50vmin] rounded-[25vmin] bg-white relative overflow-hidden">
                <div className="w-0 h-0 border-b-[30vmin] border-b-black border-l-[12vmin] border-l-transparent border-r-[50vmin] border-r-transparent absolute top-[20%] animate-fleet"></div>
            </div>
            <p className="text-2xl text-center mt-8">This Page Has Been Taken By <br/> The Witness</p>
        </div>
    )
};

export default NotFound;