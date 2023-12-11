import { FaNode, FaAngular, FaReact, FaVuejs } from 'react-icons/fa';
import { SiElectron, SiJavascript } from 'react-icons/si';
import img from '../../assets/profile.jpeg';
import { GrMysql } from 'react-icons/gr';
import { TbSql } from "react-icons/tb";
import "./profile.css"

export function Profile(){
    return <section id="home" className="container home-container">
        <div className="logo">
            <div className="hover-show active">
            <span className='circle'><FaReact /></span>
            <span className='circle' ><FaNode /></span>
            <span className='circle'><SiJavascript /></span>
            <span className='circle'><SiElectron /></span>
            <span className='circle'><TbSql /></span>
            <span className='circle'><FaVuejs /></span>
            <span className='circle'><FaAngular /></span>
            <span className='circle'><GrMysql /></span>
            </div>
            <img src={img}/>
        </div>
    </section>
}