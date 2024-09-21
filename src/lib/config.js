// Salvation's Edge
import EDGE_COVER from "../assets/salvation's edge/cover.webp";
import TRIANGLE from "../assets/salvation's edge/triangle.png";
import SQUARE from "../assets/salvation's edge/square.png";
import CIRCLE from "../assets/salvation's edge/circle.png";

// Crota's End
import CROTA_COVER from "../assets/crota's end/cover.jpg";
import RIGHT_END from "../assets/crota's end/rr.jpg";
import LEFT_END from "../assets/crota's end/rl.jpg";
import RIGHT_MID from "../assets/crota's end/mr.jpg";
import LEFT_MID from "../assets/crota's end/ml.jpg";
import RIGHT_START from "../assets/crota's end/lr.jpg";
import LEFT_START from "../assets/crota's end/ll.jpg";

// Root of Nightmares
import ROOT_COVER from "../assets/root of nightmares/cover.jpg";
import LIGHT_NODE from "../assets/root of nightmares/lightNode.png";
import DARK_NODE from "../assets/root of nightmares/darkNode.png";

// King's Fall
import KING_COVER from "../assets/king's fall/cover.jpg";
import RUNE_1 from "../assets/king's fall/rune1.png";
import RUNE_2 from "../assets/king's fall/rune2.png";
import RUNE_3 from "../assets/king's fall/rune3.png";
import RUNE_4 from "../assets/king's fall/rune4.png";
import RUNE_5 from "../assets/king's fall/rune5.png";
import RUNE_6 from "../assets/king's fall/rune6.png";
import RUNE_7 from "../assets/king's fall/rune7.png";
import RUNE_8 from "../assets/king's fall/rune8.png";
import RUNE_9 from "../assets/king's fall/rune9.png";

// Vow of the Disciple
import VOW_COVER from "../assets/vow of the disciple/cover.jpg";
import PYRAMID from "../assets/vow of the disciple/pyramid.png";
import GIVE from "../assets/vow of the disciple/give.png";
import DARKNESS from "../assets/vow of the disciple/dark.png";
import TRAVELER from "../assets/vow of the disciple/traveller.png";
import WORSHIP from "../assets/vow of the disciple/worship.png";
import LIGHT from "../assets/vow of the disciple/light.png";
import STOP from "../assets/vow of the disciple/stop.png";
import GUARDIAN from "../assets/vow of the disciple/gurdian.png";
import KILL from "../assets/vow of the disciple/kill.png";

export const RAIDS_CONFIG = [
    {
        name: "salvation's edge",
        image: EDGE_COVER,
        video: "https://www.youtube.com/embed/oHueNLrQ6ec",
        desc: "near the start of the raid there will be a wall at the back with columns of shapes on it. look at the third column from the left and read the symbols from top to bottom. input these symbols into the site.",
        rows: 5,
        cols: 3,
        select: 5,
        locations: [
            {
                name: "triangle 5",
                icon: TRIANGLE,
                iframe: "https://www.youtube.com/embed/swhZ3qkPhgg",
                desc: "near the thrid encounter there will be a large chasm with orange platforms. at the start of the chasm turn left and climb upwards and you will see the conduit, charge it with a triangle buff.",
                option: 5,
                order: 5
            },
            {
                name: "square 5",
                icon: SQUARE,
                iframe: "https://www.youtube.com/embed/swhZ3qkPhgg",
                desc: "near the thrid encounter there will be a large chasm with orange platforms. at the start of the chasm turn left and climb upwards and you will see the conduit, charge it with a square buff.",
                option: 5,
                order: 5
            },
            {
                name: "circle 5",
                icon: CIRCLE,
                iframe: "https://www.youtube.com/embed/swhZ3qkPhgg",
                desc: "near the thrid encounter there will be a large chasm with orange platforms. at the start of the chasm turn left and climb upwards and you will see the conduit, charge it with a circle buff.",
                option: 5,
                order: 5
            },
            {
                name: "triangle 4",
                icon: TRIANGLE,
                iframe: "https://www.youtube.com/embed/JzozYYyOFS0",
                desc: "after the second encounter you will come across another chasm with orange beams, instead of going forwards, jump to the opening on the left wall behind you, enter the room, and charge the fourth conduit with a triangle buff. this room requires having all the encounter triumphs complete and is not required for the red border, but to get the mods from the raid.",
                option: 4,
                order: 4
            },
            {
                name: "square 4",
                icon: SQUARE,
                iframe: "https://www.youtube.com/embed/JzozYYyOFS0",
                desc: "after the second encounter you will come across another chasm with orange beams, instead of going forwards, jump to the opening on the left wall behind you, enter the room, and charge the fourth conduit with a square buff. this room requires having all the encounter triumphs complete and is not required for the red border, but to get the mods from the raid.",
                option: 4,
                order: 4
            },
            {
                name: "circle 4",
                icon: CIRCLE,
                iframe: "https://www.youtube.com/embed/JzozYYyOFS0",
                desc: "after the second encounter you will come across another chasm with orange beams, instead of going forwards, jump to the opening on the left wall behind you, enter the room, and charge the fourth conduit with a circle buff. this room requires having all the encounter triumphs complete and is not required for the red border, but to get the mods from the raid.",
                option: 4,
                order: 4
            },
            {
                name: "triangle 3",
                icon: TRIANGLE,
                iframe: "https://www.youtube.com/embed/mh7XPFwpcKw",
                desc: "near the second encounter there will be some large blue cubes you can climb on, when at the top of them jump to the platform on the right and enter the wall. progress forwards, enter the room, and charge the thrid conduit with a triangle buff.",
                option: 3,
                order: 3
            },
            {
                name: "square 3",
                icon: SQUARE,
                iframe: "https://www.youtube.com/embed/mh7XPFwpcKw",
                desc: "near the second encounter there will be some large blue cubes you can climb on, when at the top of them jump to the platform on the right and enter the wall. progress forwards, enter the room, and charge the thrid conduit with a square buff.",
                option: 3,
                order: 3
            },
            {
                name: "circle 3",
                icon: CIRCLE,
                iframe: "https://www.youtube.com/embed/mh7XPFwpcKw",
                desc: "near the second encounter there will be some large blue cubes you can climb on, when at the top of them jump to the platform on the right and enter the wall. progress forwards, enter the room, and charge the thrid conduit with a circle buff.",
                option: 3,
                order: 3
            },
            {
                name: "triangle 2",
                icon: TRIANGLE,
                iframe: "https://www.youtube.com/embed/iWOpyhTEaeY",
                desc: "towards the end of the chasm you will pass through a door with a small stair shaped platform on the left. jump underneath it, enter the room, and charge the second conduit with a triangle buff. this room requires having all the encounter triumphs complete and is not required for the red border, but to get the mods from the raid.",
                option: 2,
                order: 2
            },
            {
                name: "square 2",
                icon: SQUARE,
                iframe: "https://www.youtube.com/embed/iWOpyhTEaeY",
                desc: "towards the end of the chasm you will pass through a door with a small stair shaped platform on the left. jump underneath it, enter the room, and charge the second conduit with a square buff. this room requires having all the encounter triumphs complete and is not required for the red border, but to get the mods from the raid.",
                option: 2,
                order: 2
            },
            {
                name: "circle 2",
                icon: CIRCLE,
                iframe: "https://www.youtube.com/embed/iWOpyhTEaeY",
                desc: "towards the end of the chasm you will pass through a door with a small stair shaped platform on the left. jump underneath it, enter the room, and charge the second conduit with a circle buff. this room requires having all the encounter triumphs complete and is not required for the red border, but to get the mods from the raid.",
                option: 2,
                order: 2
            },
            {
                name: "triangle 1",
                icon: TRIANGLE,
                iframe: "https://www.youtube.com/embed/XgTqZYV9ypA",
                desc: "at the start of the raid there will be a large chasm, instead of going forwards, turn left and continue until you see a door. enter it, turn right, and charge the first conduit with a triangle buff'",
                option: 1,
                order: 1
            },
            {
                name: "square 1",
                icon: SQUARE,
                iframe: "https://www.youtube.com/embed/XgTqZYV9ypA",
                desc: "at the start of the raid there will be a large chasm, instead of going forwards, turn left and continue until you see a door. enter it, turn right, and charge the first conduit with a square buff.",
                option: 1,
                order: 1
            },
            {
                name: "circle 1",
                icon: CIRCLE,
                iframe: "https://www.youtube.com/embed/XgTqZYV9ypA",
                desc: "at the start of the raid there will be a large chasm, instead of going forwards, turn left and continue until you see a door. enter it, turn right, and charge the first conduit with a circle buff",
                option: 1,
                order: 1
            } 
        ]
    },
    {
        name: "crota's end",
        image: CROTA_COVER,
        video: "https://www.youtube.com/embed/JsO-QmOJSmQ",
        desc: "at the start of the raid there will be three pairs statues located in the distance, each pair will either have the left or right statue on fire. read which status is on fire from left to right and input this into the site.",
        rows: 2,
        cols: 3,
        select: 3,
        locations: [
            {
                name: "statue right start",
                icon: RIGHT_START,
                iframe: "https://www.youtube.com/embed/77dqFlT2PGQ",
                desc: "At the start of the bridge encounter, walk down the stairs and turn right, continue in this direction until you see an entrance into a room. At the back of this room will be a statue, activate it.",
                option: 1,
                order: 1
            },
            {
                name: "statue right mid",
                icon: RIGHT_MID,
                iframe: "https://www.youtube.com/embed/X_z2U3jAi2Q",
                desc: "After crossing to the other side in the bridge encounter, turn right and continue in this direction until you cannot go any further. Once you are at the end there will be a statue, activate it.",
                option: 2,
                order: 2
            },
            {
                name: "statue right end",
                icon: RIGHT_END,
                iframe: "https://www.youtube.com/embed/zconc8V4ZT",
                desc: "Before starting the Crota encounter, walk outside to where he spawns and jump on to the pillar to the right. Turn around and jump to the balcony, you will see a statue at the back, activate it.",
                option: 3,
                order: 3
            },
            {
                name: "statue left start",
                icon: LEFT_START,
                iframe: "https://www.youtube.com/embed/_K4Y9mfZZUw",
                desc: "At the start of the bridge encounter, walk down the stairs and turn left, continue in this direction until you see an entrance into a room. At the back of this room will be a statue, activate it.",
                option: 1,
                order: 1
            },
            {
                name: "statue left mid",
                icon: LEFT_MID,
                iframe: "https://www.youtube.com/embed/SgICYLM3bKY",
                desc: "After crossing to the other side in the bridge encounter, turn left and continue in this direction until you cannot go any further. Once you are at the end there will be a statue, activate it.",
                option: 2,
                order: 2
            },
            {
                name: "statue left end",
                icon: LEFT_END,
                iframe: "https://www.youtube.com/embed/tAHJue3qGBY",
                desc: "Before starting the Crota encounter, walk outside to where he spawns and jump on to the pillar to the left. Turn around and jump to the balcony, you will see a statue at the back, activate it.",
                option: 3,
                order: 3
            }
        ]
    },
    {
        name: "root of nightmares",
        image: ROOT_COVER,
        video: "https://www.youtube.com/embed/w0dB4SJZ1I8",
        desc: "near the start of the raid there will be three nodes, each one can either be light or dark. read the nodes from left to right and input them into the site.",
        rows: 2,
        cols: 3,
        select: 3,
        locations: [
            {
                name: "light 1",
                icon: LIGHT_NODE,
                iframe: "https://www.youtube.com/embed/HlI6x44jtCM",
                desc: "Just before the first encounter there will be a room, make your way to the back and there will be an opening in the wall, this will lead you down some stairs into a new room, connect the light nodes inside.",
                option: 1,
                order: 1
            },
            {
                name: "light 2",
                icon: LIGHT_NODE,
                iframe: "https://www.youtube.com/embed/NtmUeXGRWQk",
                desc: "After the second enounter, there will be a jumping puzzle, traverse it until you see a large broken off part of pyramid architecture to the left. Jump over to it and enter the opening in the wall, this will lead you into a new room, connect the light nodes inside.",
                option: 2,
                order: 2
            },
            {
                name: "light 3",
                icon: LIGHT_NODE,
                iframe: "https://www.youtube.com/embed/509dnxYNkio",
                desc: "Close to the final encounter, there will be roots connected to pyramid style architecture with three gold squares, jump down to the bottom right onto the broken platform. There will be an opening above, enter it and connect the light nodes inside.",
                option: 3,
                order: 3
            },
            {
                name: "dark 1",
                icon: DARK_NODE,
                iframe: "https://www.youtube.com/embed/Ogd7IdhCnq4",
                desc: "Just before the first encounter there will be a room, make your way to the back and there will be an opening in the wall, this will lead you down some stairs into a new room, connect the dark nodes in here.",
                option: 1,
                order: 1
            },
            {
                name: "dark 2",
                icon: DARK_NODE,
                iframe: "https://www.youtube.com/embed/yzNSZZ8ay7w",
                desc: "After the second enounter, there will be a jumping puzzle, traverse it until you see a large broken off part of pyramid architecture to the left. Jump over to it and enter the opening in the wall, this will lead you into a new room, connect the dark nodes inside.",
                option: 2,
                order: 2
            },
            {
                name: "dark 3",
                icon: DARK_NODE,
                iframe: "https://www.youtube.com/embed/mVDU6e8sMpk",
                desc: "Close to the final encounter, there will be roots connected to pyramid style architecture with three gold squares, jump down to the bottom right onto the broken platform. There will be an opening above, enter it and connect the dark nodes inside.",
                option: 3,
                order: 3
            }
        ]
    },
    {
        name: "king's fall",
        image: KING_COVER,
        video: "https://www.youtube.com/embed/nfxB36YeBBc",
        desc: "before entering the portal at the start of the raid, go underneath it and you will see 3 symbols, one on the left, middle, and right. input these symbols into the site.",
        rows: 3,
        cols: 3,
        select: 3,
        locations: [
            {
                name: "rune 1",
                icon: RUNE_1,
                iframe: "https://www.youtube.com/embed/uRGMxwqB7qk",
                desc: "Located at the start of the pendulum jumping puzzle, jump to the first pendulum and turn around, there will be glowing circle to shoot on the wall.",
                option: 1,
                order: 1
            },
            {
                name: "rune 2",
                icon: RUNE_2,
                iframe: "https://www.youtube.com/embed/bR-R_nFjC2A",
                desc: "After entering the door to the first secret chest, look above the door, there will be a glowing circle to shoot on the wall.",
                option: 2,
                order: 2
            },
            {
                name: "rune 3",
                icon: RUNE_3,
                iframe: "https://www.youtube.com/embed/CdApz4Xu9Yc",
                desc: "In the Totems encounter, the room on the left will have a balcony enemies spawn on, jump up to it and there will be a glowing circle to shoot on the wall.",
                option: 3,
                order: 3
            },
            {
                name: "rune 4",
                icon: RUNE_4,
                iframe: "https://www.youtube.com/embed/Nqrh7ui0B04",
                desc: "In the Warpriest encounter, make your way up the stairs on the far right corner, at the top there will be a glowing circle to shoot on the wall.",
                option: 4,
                order: 4
            },
            {
                name: "rune 5",
                icon: RUNE_5,
                iframe: "https://www.youtube.com/embed/fGxLGiwHbaw",
                desc: "At the end of Golgoroth's Cellar there will be a hole in the floor, there will be a glowing circle inside it to shoot.",
                option: 5,
                order: 5
            },
            {
                name: "rune 6",
                icon: RUNE_6,
                iframe: "https://www.youtube.com/embed/TEnCtNFwOi8",
                desc: "In the Golgoroth encounter, jump down to where the boss spawns and turn around, there will be a secret room and inside a glowing cirlce on the wall to shoot.",
                option: 6,
                order: 6
            },
            {
                name: "rune 7",
                icon: RUNE_7,
                iframe: "https://www.youtube.com/embed/S_8iPbK_Cpg",
                desc: "In the jumping puzzle after Golgoroth, make your way to the secret chest, the wall to the left of the chest will have a glowing circle to shoot.",
                option: 7,
                order: 7
            },
            {
                name: "rune 8",
                icon: RUNE_8,
                iframe: "https://www.youtube.com/embed/vRucDSkYbgc",
                desc: "At the end of the jumping puzzle, look up at the door you enter to progress, there will be a glowing circle on the ceiling to shoot",
                option: 8,
                order: 8
            },
            {
                name: "rune 9",
                icon: RUNE_9,
                iframe: "https://www.youtube.com/embed/DzLCffctl90",
                desc: "On entering the Oryx encounter, turn around and look above the door, there will be a glowing circle to shoot on the wall.",
                option: 9,
                order: 9
            }
        ]
    },
    {
        name: "vow of the disciple",
        image: VOW_COVER,
        video: "https://www.youtube.com/embed/umzw0YWBKHQ",
        desc: "right before dropping down into the pyramid there will be a pillar with three symbols on it, input these 3 symbols into the site.",
        rows: 3,
        cols: 3,
        select: 3,
        locations: [
            {
                name: "pyramid",
                icon: PYRAMID,
                iframe: "https://www.youtube.com/embed/gOwjV1RVuZg",
                desc: "Drop down into the Pyramid and turn around. There will be a glowing crystal to the left of a door, shoot it and enter the room. At the back of the room there will be a small square to shoot.",
                option: 1,
                order: 1
            },
            {
                name: "give",
                icon: GIVE,
                iframe: "https://www.youtube.com/embed/pjxB1oVss_0",
                desc: "Just before entering the first encounter there will be a door with a glowing crystal above it, shoot it and enter the room. At the back of the room there will be a small square to shoot.",
                option: 2,
                order: 2
            },
            {
                name: "darkness",
                icon: DARKNESS,
                iframe: "https://www.youtube.com/embed/0hhc9gJDdrw",
                desc: "In the first encounter there will be a gold statue on the left side with a glowing crystal next to it, shoot it and enter the room on the left. At the back of the room there will be a small square to shoot.",
                option: 3,
                order: 3
            },
            {
                name: "traveler",
                icon: TRAVELER,
                iframe: "https://www.youtube.com/embed/cGCSi3Oh8vw",
                desc: "Just before the second encounter there will be a door with a ledge above it, behind this ledge is a glowing crystal, shoot it and enter the room. At the back of this room there will be a small square to shoot.",
                option: 4,
                order: 4
            },
            {
                name: "worship",
                icon: WORSHIP,
                iframe: "https://www.youtube.com/embed/lHcd9Spq9yk",
                desc: "In the room you defeat Caretaker there will be a glowing crystal on the left side, shoot it and enter the door on the opposite side. At the back of this room there will be a small square to shoot.",
                option: 5,
                order: 5
            },
            {
                name: "light",
                icon: LIGHT,
                iframe: "https://www.youtube.com/embed/VE8_dBGo2ic",
                desc: "After the second encounter, make your way through the jumping puzzle until you reach a large room. On the left side, near the ceiling, will be a glowing crystal to shoot, which opens a door to the right. At the back of this room will be a small square to shoot.",
                option: 6,
                order: 6
            },
            {
                name: "stop",
                icon: STOP,
                iframe: "https://www.youtube.com/embed/gJzrWuB-Yl8",
                desc: "Near the end of the first jumping puzzle, there will be a room. In this room will be a closed door, to the right of it will be a glowing crystal to shoot. Enter the room to the left. At the back of this room will be a small square to shoot",
                option: 7,
                order: 7
            },
            {
                name: "gurdian",
                icon: GUARDIAN,
                iframe: "https://www.youtube.com/embed/2ho4X7ydEtU",
                desc: "After the third encounter make your way up the left side, there will be an opening on the outer left, directly behind it will be a glowing crystal to shoot. Go back to the stairs and jump behind the large pillar directly infront, enter the room. At the back of this room will be a small square to shoot.",
                option: 8,
                order: 8
            },
            {
                name: "kill",
                icon: KILL,
                iframe: "https://www.youtube.com/embed/wyb5UYzMfdI",
                desc: "After the third encounter you will have to climb a few floors. At the top, turn around and you will see a floating crystal to shoot, this opens a door to the left, enter it. At the back of this room will be a small square to shoot.",
                option: 9,
                order: 9
            }
        ]
    }
]