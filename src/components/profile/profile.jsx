import { SiJavascript } from 'react-icons/si';
import { SiElectron } from 'react-icons/si';
import img from '../../assets/profile.jpeg';
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { FaVuejs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import "./profile.css"


export function Profile(){
    return <section id="home" className="container home-container">
        <div className="logo">
            <div className="hover-show active">
            <span className='circle'><FaReact /></span>
            <span className='circle' ><FaNodeJs /></span>
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