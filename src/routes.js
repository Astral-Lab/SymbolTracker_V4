import SymbolLocation from "./components/SymbolLocation";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import SymbolSelect from "./components/SymbolSelect";

// King's Fall
import Rune1 from './images/symbols/kf/rune1.png'
import Rune2 from './images/symbols/kf/rune2.png'
import Rune3 from './images/symbols/kf/rune3.png'
import Rune4 from './images/symbols/kf/rune4.png'
import Rune5 from './images/symbols/kf/rune5.png'
import Rune6 from './images/symbols/kf/rune6.png'
import Rune7 from './images/symbols/kf/rune7.png'
import Rune8 from './images/symbols/kf/rune8.png'
import Rune9 from './images/symbols/kf/rune9.png'

// Vow
import Pyramid from './images/symbols/vow/pyramid.png';
import Give from './images/symbols/vow/give.png';
import Darkness from './images/symbols/vow/dark.png';
import Traveller from './images/symbols/vow/traveller.png';
import Worship from './images/symbols/vow/worship.png';
import Light from './images/symbols/vow/light.png';
import Stop from './images/symbols/vow/stop.png';
import Gurdian from './images/symbols/vow/gurdian.png';
import Kill from './images/symbols/vow/kill.png';

// Root of Nightmares

const routes = [
    // Main Route
    {
        name: "main",
        exact: null,
        path: "/",
        page: Main
    },

    // Symbol Selection Routes
    {
        name: "kfselect",
        exact: null,
        path: "/kfselect",
        page: SymbolSelect,
        props: {
            symbolData: [{image: Rune1, path: "/kf/rune1"}, {image: Rune2, path: "/kf/rune2"}, {image: Rune3, path: "/kf/rune3"}, {image: Rune4, path: "/kf/rune4"}, {image: Rune5, path: "/kf/rune5"}, {image: Rune6, path: "/kf/rune6"}, {image: Rune7, path: "/kf/rune7"}, {image: Rune8, path: "/kf/rune8"}, {image: Rune9, path: "/kf/rune9"}],
            theme: "green-600"
        }
    },
    {
        name: "vowselect",
        exact: null,
        path: "/vowselect",
        page: SymbolSelect,
        props: {
            
            symbolData: [{image: Pyramid, path: "/vow/pyramid"}, {image: Give, path: "/vow/give"}, {image: Darkness, path: "/vow/darkness"}, {image: Traveller, path: "/vow/traveller"}, {image: Worship, path: "/vow/worship"}, {image: Light, path: "/vow/light"}, {image: Stop, path: "/vow/stop"}, {image: Gurdian, path: "/vow/gurdian"}, {image: Kill, path: "/vow/kill"}],
            images: [Pyramid, Give, Darkness, Traveller, Worship, Light, Stop, Gurdian, Kill],
            theme: "orange-400"
        }
    },
    {
        name: "rootselect",
        exact: null,
        path: "/rootselect",
        page: NotFound,
        props: {

        }
    },

    // Symbol Location Routes
    // King's Fall
    {
        name: "rune1",
        exact: null,
        path: "/kf/rune1",
        page: SymbolLocation,
        props: {
            image: Rune1,
            iframe: "https://www.youtube.com/embed/uRGMxwqB7qk",
            description: "Located at the start of the pendulum jumping puzzle, jump to the first pendulum and turn around, there will be glowing circle to shoot on the wall."
        }
    },
    {
        name: "rune2",
        exact: null,
        path: "/kf/rune2",
        page: SymbolLocation,
        props: {
            image: Rune2,
            iframe: "https://www.youtube.com/embed/bR-R_nFjC2A",
            description: "After entering the door to the first secret chest, look above the door, there will be a glowing circle to shoot on the wall."
        }
    },
    {
        name: "rune3",
        exact: null,
        path: "/kf/rune3",
        page: SymbolLocation,
        props: {
            image: Rune3,
            iframe: "https://www.youtube.com/embed/CdApz4Xu9Yc",
            description: "In the Totems encounter, the room on the left will have a balcony enemies spawn on, jump up to it and there will be a glowing circle to shoot on the wall."
        }
    },
    {
        name: "rune4",
        exact: null,
        path: "/kf/rune4",
        page: SymbolLocation,
        props: {
            image: Rune4,
            iframe: "https://www.youtube.com/embed/Nqrh7ui0B04",
            description: "In the Warpriest encounter, make your way up the stairs on the left, at the top there will be a glowing circle to shoot on the wall."
        }
    },
    {
        name: "rune5",
        exact: null,
        path: "/kf/rune5",
        page: SymbolLocation,
        props: {
            image: Rune5,
            iframe: "https://www.youtube.com/embed/fGxLGiwHbaw",
            description: "At the end of Golgoroth's Cellar there will be a hole in the floor, there will be a glowing circle inside it to shoot."
        }
    },
    {
        name: "rune6",
        exact: null,
        path: "/kf/rune6",
        page: SymbolLocation,
        props: {
            image: Rune6,
            iframe: "https://www.youtube.com/embed/TEnCtNFwOi8",
            description: "In the Golgoroth encounter, jump down to where the boss spawns and turn around, there will be a secret room and inside a glowing cirlce on the wall to shoot."
        }
    },
    {
        name: "rune7",
        exact: null,
        path: "/kf/rune7",
        page: SymbolLocation,
        props: {
            image: Rune7,
            iframe: "https://www.youtube.com/embed/S_8iPbK_Cpg",
            description: "In the jumping puzzle after Golgoroth, make your way to the secret chest, the wall to the left of the chest will have a glowing circle to shoot."
        }
    },
    {
        name: "rune8",
        exact: null,
        path: "/kf/rune8",
        page: SymbolLocation,
        props: {
            image: Rune8,
            iframe: "https://www.youtube.com/embed/vRucDSkYbgc",
            description: "At the end of the jumping puzzle, look up at the door you enter to progress, there will be a glowing circle on the ceiling to shoot."
        }
    },
    {
        name: "rune9",
        exact: null,
        path: "/kf/rune9",
        page: SymbolLocation,
        props: {
            image: Rune9,
            iframe: "https://www.youtube.com/embed/DzLCffctl90",
            description: "On entering the Oryx encounter, turn around and look above the door, there will be a glowing circle to shoot on the wall."
        }
    },

    // Vow
    {
        name: "pyramid",
        exact: null,
        path: "/vow/pyramid",
        page: SymbolLocation,
        props: {
            image: Pyramid,
            iframe: "https://www.youtube.com/embed/gOwjV1RVuZg",
            description: "Drop down into the Pyramid and turn around. There will be a glowing crystal to the left of a door, shoot it and enter the room. At the back of the room there will be a small square to shoot."
        }
    },
    {
        name: "give",
        exact: null,
        path: "/vow/give",
        page: SymbolLocation,
        props: {
            image: Give,
            iframe: "https://www.youtube.com/embed/pjxB1oVss_0",
            description: "Just before entering the first encounter there will be a door with a glowing crystal above it, shoot it and enter the room. At the back of the room there will be a small square to shoot."
        }
    },
    {
        name: "darkness",
        exact: null,
        path: "/vow/darkness",
        page: SymbolLocation,
        props: {
            image: Darkness,
            iframe: "https://www.youtube.com/embed/0hhc9gJDdrw",
            description: "In the first encounter there will be a gold statue on the left side with a glowing crystal next to it, shoot it and enter the room on the left. At the back of the room there will be a small square to shoot."
        }
    },
    {
        name: "traveller",
        exact: null,
        path: "/vow/traveller",
        page: SymbolLocation,
        props: {
            image: Traveller,
            iframe: "https://www.youtube.com/embed/cGCSi3Oh8vw",
            description: "Just before the second encounter there will be a door with a ledge above it, behind this ledge is a glowing crystal, shoot it and enter the room. At the back of this room there will be a small square to shoot."
        }
    },
    {
        name: "worship",
        exact: null,
        path: "/vow/worship",
        page: SymbolLocation,
        props: {
            image: Worship,
            iframe: "https://www.youtube.com/embed/lHcd9Spq9yk",
            description: "In the room you defeat Caretaker there will be a glowing crystal on the left side, shoot it and enter the door on the opposite side. At the back of this room there will be a small square to shoot."
        }
    },
    {
        name: "light",
        exact: null,
        path: "/vow/light",
        page: SymbolLocation,
        props: {
            image: Light,
            iframe: "https://www.youtube.com/embed/VE8_dBGo2ic",
            description: "After the second encounter, make your way through the jumping puzzle until you reach a large room. On the left side, near the ceiling, will be a glowing crystal to shoot, which opens a door to the right. At the back of this room will be a small square to shoot."
        }
    },
    {
        name: "stop",
        exact: null,
        path: "/vow/stop",
        page: SymbolLocation,
        props: {
            image: Stop,
            iframe: "https://www.youtube.com/embed/gJzrWuB-Yl8",
            description: "Near the end of the first jumping puzzle, there will be a room. In this room will be a closed door, to the right of it will be a glowing crystal to shoot. Enter the room to the left. At the back of this room will be a small square to shoot."
        }
    },
    {
        name: "gurdian",
        exact: null,
        path: "/vow/gurdian",
        page: SymbolLocation,
        props: {
            image: Gurdian,
            iframe: "https://www.youtube.com/embed/2ho4X7ydEtU",
            description: "After the third encounter make your way up the left side, there will be an opening on the outer left, directly behind it will be a glowing crystal to shoot. Go back to the stairs and jump behind the large pillar directly infront, enter the room. At the back of this room will be a small square to shoot."
        }
    },
    {
        name: "kill",
        exact: null,
        path: "/vow/kill",
        page: SymbolLocation,
        props: {
            image: Kill,
            iframe: "https://www.youtube.com/embed/wyb5UYzMfdI",
            description: "After the third encounter you will have to climb a few floor. At the top, turn around and you will see a floating crystal to shoot, this opens a door to the left, enter it. At the back of this room will be a small square to shoot."
        }
    },
    // Root of Nightmares
    // Err Routes
    {
        name: "404",
        exact: null,
        path: "*",
        page: NotFound
    }
];

export default routes;