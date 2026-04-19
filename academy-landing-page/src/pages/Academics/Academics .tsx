import HeroAbout from "../../components/HeroAbout/HeroAbout"
import { heroData } from "../../components/HeroAbout/HeroAboutData"

import OurSpecialFeatures from "../../components/academicsComponents/ourSpecialFeatures/ourSpecialFeatures";
import { featuresHeaderContent,feauterData } from "../../components/academicsComponents/ourSpecialFeatures/ourSpecialFeaturesData";


import WhatStudentsLearn from "../../components/academicsComponents/whatStudentsLearn/WhatStudentsLearn";
import { whatStudentsLearnData, whatStudentsLearnHeader } from "../../components/academicsComponents/whatStudentsLearn/WhatStudentsLearnData";


const Academics  = () => {
    return (
        <>
        <HeroAbout {...heroData.academics}/>
        <main>
            <section>
                <OurSpecialFeatures {...featuresHeaderContent} cardsItem={feauterData} 
                />
            </section>
            <section>
                <WhatStudentsLearn 
                    subTitle={whatStudentsLearnHeader.subTitle}
                    featureTitle={whatStudentsLearnHeader.featureTitle}
                    featurePar={whatStudentsLearnHeader.featurePar}
                    cardsItem={whatStudentsLearnData} 
                                    />
            </section>
        </main>
        </>
    )
}

export default Academics 
