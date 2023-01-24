import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"
import "./contact.css"

function Contact({ play }) {

    const onContactClick = (link) => {
        play();
        window.open(link, '_blank');
    }

    const onMailClick = (gmail) => {
        play();
        window.location = `mailto: ${gmail}`;
    }
    return (
        <section className="contact-container">
            <span className="kreep"><SiLinkedin size={35} onClick={() => onContactClick("https://www.linkedin.com/in/ajayghimire/")} /></span>
            <span className="kreep"><SiGithub size={35} onClick={() => onContactClick("https://github.com/AjayGhimire1998")} /></span>
            <span className="kreep"><SiGmail size={35} onClick={() => onMailClick("ajayghimire1998@gmail.com")} /></span>
            <span className="kreep"><SiFacebook size={35} onClick={() => onContactClick("https://www.facebook.com/azeyghimirey/")} /></span>
            <span className="kreep"><SiInstagram size={35} onClick={() => onContactClick("https://www.instagram.com/azeysupertramp/")} /></span>
        </section>
    )
}

export default Contact