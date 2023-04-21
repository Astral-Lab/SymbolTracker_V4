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
import LightNode from './images/symbols/root/lightNode.png'
import DarkNode from './images/symbols/root/darkNode.png'

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
            symbolData: [{image: Rune1, path: "/kf/1"}, {image: Rune2, path: "/kf/2"}, {image: Rune3, path: "/kf/3"}, {image: Rune4, path: "/kf/4"}, {image: Rune5, path: "/kf/5"}, {image: Rune6, path: "/kf/6"}, {image: Rune7, path: "/kf/7"}, {image: Rune8, path: "/kf/8"}, {image: Rune9, path: "/kf/9"}],
            theme: "green-600"
        }
    },
    {
        name: "vowselect",
        exact: null,
        path: "/vowselect",
        page: SymbolSelect,
        props: {
            symbolData: [{image: Pyramid, path: "/vow/1"}, {image: Give, path: "/vow/2"}, {image: Darkness, path: "/vow/3"}, {image: Traveller, path: "/vow/4"}, {image: Worship, path: "/vow/5"}, {image: Light, path: "/vow/6"}, {image: Stop, path: "/vow/7"}, {image: Gurdian, path: "/vow/8"}, {image: Kill, path: "/vow/9"}],
            theme: "orange-400"
        }
    },
    {
        name: "rootselect",
        exact: null,
        path: "/rootselect",
        page: SymbolSelect,
        props: {
            symbolData: [{image: LightNode, path: "/root/1"}, {image: LightNode, path: "/root/3"}, {image: LightNode, path: "/root/5"}, {image: DarkNode, path: "/root/2"}, {image: DarkNode, path: "/root/4"}, {image: DarkNode, path: "/root/6"}],
            theme: ""
        }
    },

    // Symbol Location Routes
    // King's Fall
    {
        name: "rune1",
        exact: null,
        path: "/kf/1",
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
        path: "/kf/2",
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
        path: "/kf/3",
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
        path: "/kf/4",
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
        path: "/kf/5",
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
        path: "/kf/6",
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
        path: "/kf/7",
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
        path: "/kf/8",
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
        path: "/kf/9",
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
        path: "/vow/1",
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
        path: "/vow/2",
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
        path: "/vow/3",
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
        path: "/vow/4",
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
        path: "/vow/5",
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
        path: "/vow/6",
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
        path: "/vow/7",
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
        path: "/vow/8",
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
        path: "/vow/9",
        page: SymbolLocation,
        props: {
            image: Kill,
            iframe: "https://www.youtube.com/embed/wyb5UYzMfdI",
            description: "After the third encounter you will have to climb a few floor. At the top, turn around and you will see a floating crystal to shoot, this opens a door to the left, enter it. At the back of this room will be a small square to shoot."
        }
    },

    // Root of Nightmares
    {
        name: "light1",
        exact: null,
        path: "/root/1",
        page: SymbolLocation,
        props: {
            image: LightNode,
            iframe: "https://www.youtube.com/embed/HlI6x44jtCM",
            description: "Light 1"
        }
    },
    {
        name: "light2",
        exact: null,
        path: "/root/3",
        page: SymbolLocation,
        props: {
            image: LightNode,
            iframe: "https://www.youtube.com/embed/Ogd7IdhCnq4",
            description: "Light 2"
        }
    },
    {
        name: "light3",
        exact: null,
        path: "/root/5",
        page: SymbolLocation,
        props: {
            image: LightNode,
            iframe: "https://www.youtube.com/embed/HlI6x44jtCM",
            description: "Light 3"
        }
    },
    {
        name: "dark1",
        exact: null,
        path: "/root/2",
        page: SymbolLocation,
        props: {
            image: DarkNode,
            iframe: "https://www.youtube.com/embed/HlI6x44jtCM",
            description: "Dark 1"
        }
    },
    {
        name: "dark2",
        exact: null,
        path: "/root/4",
        page: SymbolLocation,
        props: {
            image: DarkNode,
            iframe: "https://www.youtube.com/embed/HlI6x44jtCM",
            description: "Dark 2"
        }
    },
    {
        name: "dark3",
        exact: null,
        path: "/root/6",
        page: SymbolLocation,
        props: {
            image: DarkNode,
            iframe: "https://www.youtube.com/embed/HlI6x44jtCM",
            description: "Dark 3"
        }
    },

    // Err Routes
    {
        name: "404",
        exact: null,
        path: "*",
        page: NotFound
    }
];

export default routes;