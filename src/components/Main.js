import RaidCard from './RaidCard';
import VowRaid from '../images/VowStart.jpg';
import KingsFallRaid from '../images/KingsFallStart.jpg';
// import NightmaresRaid from '../images/NightmaresStart.jpg';
import LightfallPlaceholder from '../images/LightfallPlaceholder.jpg';

const Main = () => {
    // clear localStorage
    localStorage.removeItem("selectedSymbols");
    console.log(localStorage);
    
    return (
        <main className="w-full flex flex-col-reverse items-center gap-8">
            <RaidCard
                imageSrc={VowRaid}
                raidName={"Vow of the Disciple"}
                alt={"Vow of the Disciple Raid Start"}
                theme={"bg-green-800"}
                route={"/vowselect"}
            />
             <RaidCard
                imageSrc={KingsFallRaid}
                raidName={"King's Fall"}
                alt={"King's Fall Raid Start"}
                theme={"bg-burgundy-red"}
                route={"/kfselect"}
            />
             <RaidCard
                imageSrc={LightfallPlaceholder}
                raidName={"Root of Nightmares"}
                alt={"Root of Nightmares Raid Start"}
                theme={"bg-cyan"}
                route={"/rootselect"}
            />
        </main>
    )
};

export default Main;