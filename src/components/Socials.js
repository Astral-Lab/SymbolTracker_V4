import Twitter from '../images/socials/twitterIcon.png';
import Github from '../images/socials/githubIcon.png';
import Linkedin from '../images/socials/linkedin.png';

const Socials = () => {
    return (
        <section className="flex gap-6">
            <a href="" target="_blank">
                <img 
                    src={Linkedin}
                    alt="Linkedin Icon"
                />
            </a>
            <a href="https://twitter.com/_astral_labs" target="_blank">
                <img 
                    src={Twitter}
                    alt="Twitter Icon"
                />
            </a>
            <a href="https://github.com/Astral-Lab/Symbol_Tracker" target="_blank">
                <img 
                    src={Github}
                    alt="GitHub Icon"
                />
            </a>
        </section>
    )
};

export default Socials;