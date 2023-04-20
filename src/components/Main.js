import RaidCard from './RaidCard';
import VowRaid from '../images/raid/VowStart.jpg';
import KingsFallRaid from '../images/raid/KingsFallStart.jpg';
import NightmaresRaid from '../images/raid/RoNStart.jpg';

const Main = () => {
    // clear localStorage
    localStorage.removeItem("selectedSymbols");

    return (
        <main className="w-full flex flex-col items-center gap-8">
            <RaidCard
                imageSrc={NightmaresRaid}
                raidName={"Root of Nightmares"}
                alt={"Root of Nightmares Raid Start"}
                theme={"bg-cyan"}
                route={"/rootselect"}
            />          
             <RaidCard
                imageSrc={KingsFallRaid}
                raidName={"King's Fall"}
                alt={"King's Fall Raid Start"}
                theme={"bg-burgundy-red"}
                route={"/kfselect"}
            />
            <RaidCard
                imageSrc={VowRaid}
                raidName={"Vow of the Disciple"}
                alt={"Vow of the Disciple Raid Start"}
                theme={"bg-green-800"}
                route={"/vowselect"}
            />
        </main>
    )
};

export default Main;