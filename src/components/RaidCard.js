import { Link } from 'react-router-dom';

const RaidCard = ({imageSrc, raidName, alt, theme, route}) => {
    return (
        <figure className="w-11/12">
            <Link to={route}>
                <img
                    src={imageSrc}
                    alt={alt}
                />
                <figcaption className={`h-28 ${theme} grid place-content-center text-4xl text-white rounded-b`}>
                    {raidName}
                </figcaption>
            </Link>
        </figure>
    )
};

export default RaidCard;