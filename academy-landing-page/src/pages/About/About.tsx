
import HeroAbout from "../../components/HeroAbout/HeroAbout"
import { heroAboutData } from "../../components/HeroAbout/HeroAboutData"
import OurAwardsandRecognitions from "../../components/ourAwardsandRecognitions/ourAwardsandRecognitions";
import { ourAwardsandRecognitionsData } from "../../components/ourAwardsandRecognitions/ourAwardsandRecognitionsData";
import OurMissionVisions from "../../components/ourMissionVisions/ourMissionVisions";
import { missionVisionsData } from "../../components/ourMissionVisions/ourMissionVisionsData";
import "./About.css"
const About = () => {
    return (
        <>
        <HeroAbout {...heroAboutData}/>
        <main>
            <section>
            <OurMissionVisions {...missionVisionsData}/>
            </section>
            <section>
                <OurAwardsandRecognitions {...ourAwardsandRecognitionsData}></OurAwardsandRecognitions>
            </section>
        </main>
        </>
    )
}

export default About
