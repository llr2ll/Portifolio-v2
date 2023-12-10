import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./contact.css";

export function Contact() {
  return <div id="contact" className="container contact-container">
    <h1>Contact Me</h1>
    <div className="contact-links">
      <a href="https://github.com/llr2ll" className="contact youtube" target={"blank"}>
        <AiFillGithub className="icon" />
        <h2>github</h2>
      </a>

      <a href="https://api.whatsapp.com/send?phone=5513998046526" className="contact whatsapp" target={"blank"}>
        <AiOutlineWhatsApp className="icon" />
        <h2>whatsapp</h2>
      </a>

      <a href="mailto:raphaelsanseverino@gmail.com" className="contact instagram">
        <AiOutlineMail className="icon" />
        <h2>Mail</h2>
      </a>
    </div>
  </div>
}