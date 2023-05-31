// import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"
import "./contact.css";
import { EmailSvg, FacebookSvg, GithubSvg, InstaSvg, LinkedInSvg, contacts } from "./contact-svg";

function Contact({ play }) {
  const onContactClick = (link) => {
    play();
    window.open(link, "_blank");
  };

  const onMailClick = (gmail) => {
    play();
    window.location = `mailto: ${gmail}`;
  };

  const contactIcons = contacts.map((contact) => (
    <span className="kreep" onClick={() => play()}>{contact}</span>
  ));
  return (
    <section className="contact-container">
      {/* {contacts?.map((contact) => {
        return <span className="kreep">{contact}</span>;
      })} */}
      {contactIcons}
      {/* <InstaSvg /> */}
      {/* <span className="kreep"><SiLinkedin size={35} onClick={() => onContactClick("https://www.linkedin.com/in/ajayghimire/")} /></span>
            <span className="kreep"><SiGithub size={35} onClick={() => onContactClick("https://github.com/AjayGhimire1998")} /></span>
            <span className="kreep"><SiGmail size={35} onClick={() => onMailClick("ajayghimire1998@gmail.com")} /></span>
            <span className="kreep"><SiFacebook size={35} onClick={() => onContactClick("https://www.facebook.com/azeyghimirey/")} /></span>
            <span className="kreep"><SiInstagram size={35} onClick={() => onContactClick("https://www.instagram.com/azeysupertramp/")} /></span> */}
    </section>
  );
}

export default Contact;
