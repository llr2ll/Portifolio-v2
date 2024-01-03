import { ILanguage } from "../../types";
import "./certificates.css"

import br from "../../assets/br.svg"
import us from "../../assets/us.svg"
import es from "../../assets/es.svg"
import { useState } from "react";

export function Certificates({ language }: ILanguage){
    let [ selectedCertificate, setSelectedCertificate ] = useState<number>(0)
    let Title = ["Certificates", "Certificados", "Certificados"]
    let certificates = [br, us, es]

    return <section id="certificates" className="fade">
        <h1>{Title[language]}</h1>
        <div>
            <div className="central-certificate">
                <img src={certificates[selectedCertificate]}/>
            </div>
            <div className="side-certificate">
                {certificates.map((item, index) =>
                    <img style={{ border: selectedCertificate === index ? "3px solid rgb(82, 188, 250)" : "none" }} 
                         onClick={() => setSelectedCertificate(index)}
                         src={item}/>
                )}
            </div>
        </div>
    </section>
}