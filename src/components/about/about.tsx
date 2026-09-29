import { CodeBlock, dracula } from 'react-code-blocks';
import { ILanguage } from '../../types';

export function About({ language }: ILanguage){

    let Text = [
        `I'm Raphael Sanseverino, a developer focused on creating efficient, functional, and results-driven digital solutions. <br/>
            Currently based in Spain, I am a European Union citizen and available for new professional opportunities. <br/>
            I transform needs and challenges into well-structured digital solutions, combining technology, performance, and quality execution <br/>
            to develop projects that create real value for businesses. <br/>
            Let's connect and turn ideas into concrete, efficient, and profitable solutions!`,

        `Sou Raphael Sanseverino, desenvolvedor focado na criação de soluções digitais eficientes, funcionais e orientadas para resultados. <br/>
            Atualmente baseado em Espanha, sou cidadão da União Europeia e estou disponível para novas oportunidades profissionais. <br/>
            Transformo necessidades e desafios em soluções digitais bem estruturadas, combinando tecnologia, performance e qualidade de execução <br/>
            para desenvolver projetos que geram valor real para os negócios. <br/>
            Vamos conversar e transformar ideias em soluções concretas, eficientes e rentáveis!`,

        `Soy Raphael Sanseverino, desarrollador enfocado en la creación de soluciones digitales eficientes, funcionales y orientadas a resultados. <br/>
            Actualmente resido en España, soy ciudadano de la Unión Europea y estoy disponible para nuevas oportunidades profesionales. <br/>
            Transformo necesidades y desafíos en soluciones digitales bien estructuradas, combinando tecnología, rendimiento y calidad de ejecución <br/>
            para desarrollar proyectos que generan un valor real para los negocios. <br/>
            Hablemos y transformemos ideas en soluciones concretas, eficientes y rentables!`
    ]

      let Title = ["Hello there!", "Olá!", "¡Hola!"]

    let code = `function Greetings(){
    return <section>
        <h1>${Title[language]}</h1>
        <p>
            ${Text[language]}
        </p>
    </section>    
}`

    return <section style={{backgroundColor: 'var(--main-bg-color)', padding: "0px 5% 5%"}}>
        <CodeBlock text={code} customStyle={{ background: "rgb(40, 42, 54, 0.7)", borderRadius: "20px"}} language={"javascript"} showLineNumbers={true} theme={dracula}/>
    </section>
}