
import HeroAbout from "../../components/HeroAbout/HeroAbout"
import { heroData } from "../../components/HeroAbout/HeroAboutData"
import OurAwardsandRecognitions from "../../components/ourAwardsandRecognitions/ourAwardsandRecognitions";
import { ourAwardsandRecognitionsData } from "../../components/ourAwardsandRecognitions/ourAwardsandRecognitionsData";
import OurHistory from "../../components/ourHistory/ourHistory";
import { ourHistoryData } from "../../components/ourHistory/ourHistoryData";
import OurMissionVisions from "../../components/ourMissionVisions/ourMissionVisions";
import { missionVisionsData } from "../../components/ourMissionVisions/ourMissionVisionsData";
import OurTeamMembers from "../../components/ourTeamMembers/ourTeamMembers";
import { ourTeamMembersData } from "../../components/ourTeamMembers/ourTeamMembersData";
import "./About.css"
const About = () => {
    return (
        <>
        <HeroAbout {...heroData.about}/>
        <main>
            <section>
            <OurMissionVisions {...missionVisionsData}/>
            </section>
            <section>
                <OurAwardsandRecognitions {...ourAwardsandRecognitionsData}></OurAwardsandRecognitions>
            </section>
            <section>
                <OurHistory {...ourHistoryData}></OurHistory>
            </section>
            <section>
                <OurTeamMembers {...ourTeamMembersData}></OurTeamMembers>
            </section>
        </main>
        </>
    )
}

export default About
