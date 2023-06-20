import "./contact.css";
import { contacts } from "./contact-svg";
import EachContact from "./EachContact";

function Contact({ play }) {
  const contactIcons = contacts.map((contact) => {
    return (
      <EachContact
        contact={contact}
        // contacts={contacts}
        play={play}
        key={contacts?.indexOf(contact)}
      />
    );
  });
  return <section className="contact-container">{contactIcons}</section>;
}

export default Contact;
