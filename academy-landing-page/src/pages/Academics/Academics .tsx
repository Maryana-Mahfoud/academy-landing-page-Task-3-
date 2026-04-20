import HeroAbout from "../../components/HeroAbout/HeroAbout"
import { heroData } from "../../components/HeroAbout/HeroAboutData"

import OurSpecialFeatures from "../../components/academicsComponents/ourSpecialFeatures/ourSpecialFeatures";
import { featuresHeaderContent,feauterData } from "../../components/academicsComponents/ourSpecialFeatures/ourSpecialFeaturesData";


import WhatStudentsLearn from "../../components/academicsComponents/whatStudentsLearn/WhatStudentsLearn";
import { whatStudentsLearnData, whatStudentsLearnHeader } from "../../components/academicsComponents/whatStudentsLearn/WhatStudentsLearnData";

import OurRoomsGallery from "../../components/academicsComponents/OurRoomsGallery/OurRoomsGallery";
import { roomsData } from "../../components/academicsComponents/OurRoomsGallery/OurRoomsGalleryData";

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
            <section>
                <OurRoomsGallery 
                    subTitle="Our Gallery"
                    title="Our Rooms Gallery"
                    paragraph="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
                    roomsData={roomsData} />
            </section>
        </main>
        </>
    )
}

export default Academics 
