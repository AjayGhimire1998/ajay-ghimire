import { EmailSvg, FacebookSvg, GithubSvg, InstaSvg, LinkedInSvg } from "./contact-svg"
import "./contact.css"

function Contact() {
    return (
        <section className="contact-container">
            <LinkedInSvg />
            <GithubSvg />
            <EmailSvg />
            <FacebookSvg />
            <InstaSvg />
        </section>
    )
}

export default Contact