// react-icons
import {IconContext} from 'react-icons';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Socials = () => {
    return (
        <IconContext.Provider value={{size: '30px', color: 'white'}}>
            <section className="flex gap-6">
                <a href="https://www.linkedin.com/in/josh-s-4a4b6926b/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn/>
                </a>
                <a href="https://twitter.com/_astral_labs" target="_blank" rel="noreferrer">
                    <BsTwitter/>
                </a>
                <a href="https://github.com/Astral-Lab/SymbolTracker_V3" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>
            </section>
        </IconContext.Provider>
    )
};

export default Socials;