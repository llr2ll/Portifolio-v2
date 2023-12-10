import Particles, { initParticlesEngine } from "@tsparticles/react";
import ParticlesConfig from "./particles.json"
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import "./background.css"

export function Background(){
    const [ init, setInit ] = useState(false)

    useEffect(() => {
        initParticlesEngine(async engine => await loadFull(engine) )
        .then(() => { setInit(true) })
    }, []);

    return <>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        {init && <Particles options={ParticlesConfig}/>}
    </>
}