import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ILanguage } from "../../types"
import Grid from '@mui/material/Grid'
import "./contact.css";

export function Contact({ language }: ILanguage) {
  let Title = ["Contact Me", "Contate-me", "Contáctame"]
  let mail = ["Mail", "E-mail", "Correo"]
  
  const Item = styled(Paper)(() => ({
    backgroundColor: "var(--card-bg)",
    padding: "20px",
    boxShadow: "none",
    borderRadius: "20px"
  }));

  return <section id="contact" className="contact-container fade">
    <h1>{Title[language]}</h1>
    <Grid container spacing={2} sx={{ padding: "15px", marginBottom: "55px"}}>
      <Grid item xs={12} sm={4}>
        <Item className="contact" onClick={() => window.open("https://github.com/llr2ll", "_blank")}>
            <AiFillGithub className="icon"/>
            <h2>github</h2>
        </Item>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Item className="contact" onClick={() => window.open("https://api.whatsapp.com/send?phone=5513998046526", "_blank")}>
            <AiOutlineWhatsApp className="icon"/>
            <h2>whatsApp</h2>
        </Item>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Item className="contact" onClick={() => window.location.href = "mailto:raphaelsanseverino@gmail.com"}>
            <AiOutlineMail className="icon"/>
            <h2>{mail[language]}</h2>
        </Item>
      </Grid>
    </Grid>
  </section>
}