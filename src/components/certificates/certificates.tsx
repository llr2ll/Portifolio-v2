import { ILanguage } from "../../types";
import { useState } from "react";
import "./certificates.css"

export function Certificates({ language }: ILanguage){
    let certificates: string[] = [
        "https://github.com/llr2ll/certificates/blob/master/Linux-I-using-the-terminal.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/blender-plus-krita.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/bootstrap-4-creating-a-responsive-landing-page.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/css-architecture-uncomplicating-the-problems.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/css-grid-simplifying-layouts.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/dart-primeiros-passos-com-a-linguagem.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/flexbox-position-elements-on-the-canvas.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/git-and-github-control-and-share-your-code.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/html5-and-css3-part-1-create-a-webpage.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/html5-and-css3-part-2-positioning-lists-and-navigation.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/html5-and-css3-part-3-working-with-forms-and-tables.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/html5-and-css3-part-4-advancing-in-css.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/http-understanding-the-web.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javaccript-programming-object-oriented.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-and-html-develop-a-game-and-practice-programming-logic.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-and-html-practice-logic-with-drawings-animations-and-a-game.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-arrays.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-exploring-the-language.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-for-backend.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-interfaces-and-inheritance-in-object-oriented.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-knowing-the-browser-and-design-patterns.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-objects.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-programming-in-the-language-of-the-web.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/javascript-types-variables-and-functions.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-abstracting-your-css-with-styled-components.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-automating-tests-in-front-end-applications.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-ciclo-de-vida-dos-componentes.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-entendendo-como-a-biblioteca-funciona.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-function-components-uma-abordagem-moderna.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-hooks-contextos-e-boas-praticas.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-js.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/react-router-navigating-a-spa.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/rest-com-nodejs-api-com-express-e-mysql.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/typescript-parte-1-evoluindo-seu-javascript.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/typescript-parte-2-mais-tecnicas-e-boas-praticas.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/web-accessibility-create-inclusive-designs.jpg?raw=true",
        "https://github.com/llr2ll/certificates/blob/master/web-accessibility-part-1-making-your-frontend-inclusive.jpg?raw=true",
    ]
    let [ selectedCertificate, setSelectedCertificate ] = useState<number>(0)
    let Title = ["Certificates", "Certificados", "Certificados"]

    return <section id="certificates" className="fade">
        <h1>{Title[language]}</h1>
        <div>
            <div className="central-certificate">
                <img src={certificates && certificates[selectedCertificate]}/>
            </div>
            <div className="side-certificate">
                {certificates?.map((item: string, index: any) => 
                    <img className={ selectedCertificate === index ? "pulse-border" : ""} 
                         style={{ border: selectedCertificate === index ? "3px solid rgb(82, 188, 250)" : "none" }} 
                         onClick={() => setSelectedCertificate(index)}
                         src={item}/>
                )}
            </div>
        </div>
    </section>
}