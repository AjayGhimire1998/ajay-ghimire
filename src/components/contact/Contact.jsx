import { EmailSvg, FacebookSvg, GithubSvg, InstaSvg, LinkedInSvg } from "./contact-svg"
import "./contact.css"

function Contact() {
    return (
        <section className="contact-container">
            <span className="kreep"><LinkedInSvg className=" linkedin" /></span>
            <span className="kreep"><GithubSvg className=" github" /></span>
            <span className="kreep"><EmailSvg className=" email" /></span>
            <span className="kreep"><FacebookSvg className=" facebook" /></span>
            <span className="kreep"><InstaSvg className=" insta" /></span>
        </section>
    )
}

export default Contact