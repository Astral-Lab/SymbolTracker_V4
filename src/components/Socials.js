// react-icons
import {IconContext} from 'react-icons';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Socials = () => {
    return (
        <IconContext.Provider value={{size: '30px', color: 'white'}}>
            <section className="flex gap-6">
                <a href="" target="_blank">
                    <FaLinkedinIn/>
                </a>
                <a href="https://twitter.com/_astral_labs" target="_blank">
                    <BsTwitter/>
                </a>
                <a href="https://github.com/Astral-Lab/Symbol_Tracker" target="_blank">
                    <FaGithub/>
                </a>
            </section>
        </IconContext.Provider>
    )
};

export default Socials;