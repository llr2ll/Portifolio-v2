import { ILanguage } from "../../types"
import us from "../../assets/us.svg"
import br from "../../assets/br.svg"
import es from "../../assets/es.svg"
import "./language.css"

export function Language({ language, setLanguage }: ILanguage){
    return <section className="language-switch fade">
        <div onClick={() => setLanguage && setLanguage(0)}>
            <img src={us} height="16px"/>
            <p style={{ color: language === 0 ? "var(--secundary-color)" : "var(--main-color)" }}>ENG</p>  
        </div>
    |
        <div onClick={() => setLanguage && setLanguage(1)}>
            <img src={br} height="16px"/>
            <p style={{ color: language === 1 ? "var(--secundary-color)" : "var(--main-color)" }}>PT</p>    
        </div>
    |
        <div onClick={() => setLanguage && setLanguage(2)}>
            <img src={es} height="16px"/>
            <p style={{ color: language === 2 ? "var(--secundary-color)" : "var(--main-color)" }}>ES</p>   
        </div>
    </section>
}