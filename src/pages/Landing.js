import RaidCard from "../components/RaidCard";

export default function Landing({ raids }) {
    const raidCards = raids.map(raid => (
        <RaidCard
            name={raid.name}
            cover={raid.image}
        />
    ))
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full lg:max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 content-start gap-4 lg:gap-8 p-4 lg:p-0">
                {raidCards}
            </div>
        </div>
    )
}