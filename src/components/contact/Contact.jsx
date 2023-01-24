import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"
import "./contact.css"

function Contact({ play, hover }) {
    return (
        <section className="contact-container">
            <span className="kreep"><SiLinkedin size={35}  /></span>
            <span className="kreep"><SiGithub size={35}  /></span>
            <span className="kreep"><SiGmail size={35}  /></span>
            <span className="kreep"><SiFacebook size={35}  /></span>
            <span className="kreep"><SiInstagram size={35}  /></span>
        </section>
    )
}

export default Contact