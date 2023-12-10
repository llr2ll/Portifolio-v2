import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi2";
import "./theme.css"

export function Theme(){
    return <section className="theme-switch">
        <BsFillMoonStarsFill />
        <HiSun />
    </section>
}