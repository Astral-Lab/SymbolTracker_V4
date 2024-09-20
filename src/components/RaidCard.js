import { Link } from "react-router-dom";

export default function RaidCard({ 
    name,
    cover
 }) {
    return (
        <Link to={`/raid/${name}`}>
            <figure className="shrink-0 w-full z-10 aspect-video bg-dark-four relative shadow-md overflow-hidden hover:cursor-pointer">
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute inset-0"></div>
                <img
                    className="w-full h-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
                    src={cover}
                    alt={`cover of the destiny 2 ${name} raid`}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white-main text-lg lg:text-2xl">{name}</figcaption>
            </figure>
        </Link>
    )
}