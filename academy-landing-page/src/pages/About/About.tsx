
import HeroAbout from "../../components/HeroAbout/HeroAbout"
import { heroAboutData } from "../../components/HeroAbout/HeroAboutData"
import "./About.css"
const About = () => {
    return (
        <>
        <HeroAbout {...heroAboutData}/>
        </>
    )
}

export default About
