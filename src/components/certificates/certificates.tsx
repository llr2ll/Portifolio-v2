import { useState } from "react";
import { ILanguage } from "../../types";
import "./certificates.css"

function importAll(r: any): string[]{
    let images:string[] = [];
    
    r.keys().forEach((item: string) => images.push(item.replace('./', '../../assets/certificates/')))

    return images
}

export function Certificates({ language }: ILanguage){
    let certificates: string[] = importAll(require.context('../../assets/certificates', false, /\.(jpg)$/))
    let [ selectedCertificate, setSelectedCertificate ] = useState<number>(0)
    let Title = ["Certificates", "Certificados", "Certificados"]

    return <section id="certificates" className="fade">
        <h1>{Title[language]}</h1>
        <div>
            <div className="central-certificate">
                <img src={certificates && certificates[selectedCertificate]}/>
            </div>
            <div className="side-certificate">
                {certificates?.map((item: any, index: any) => {
                    const image = require(item)

                    return <img className={ selectedCertificate === index ? "pulse-border" : ""} 
                                style={{ border: selectedCertificate === index ? "3px solid rgb(82, 188, 250)" : "none" }} 
                                onClick={() => setSelectedCertificate(index)}
                                src={image}/>
                })}
            </div>
        </div>
    </section>
}