import "./WhatStudentsLearn.css";
import type { WhatStudentCard } from "./WhatStudentsLearnData";

interface whatStudentProps {
    subTitle: string;
    featureTitle: string;
    featurePar: string;
    cardsItem: WhatStudentCard[];
}

const WhatStudentsLearn = ({ subTitle, featureTitle, featurePar, cardsItem }: whatStudentProps) => {
    return (
        <section className="student-learn">
            
            <div className="student-learn__header">
                <span className="student-learn__badge">{subTitle}</span>
                <h2 className="student-learn__title">{featureTitle}</h2>
                <p className="student-learn__desc">{featurePar}</p>
            </div>

            
            <div className="student-learn__grid">
                {cardsItem.map((item) => (
                    <div key={item.id} className="student-learn__card">
                        <div className="student-learn__image-container">
                            <img 
                                src={item.icon} 
                                alt={item.title} 
                                className="student-learn__img" 
                            />
                        </div>
                        <div className="student-learn__content">
                            <h3 className="student-learn__card-title">{item.title}</h3>
                            <p className="student-learn__card-text">{item.pargraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhatStudentsLearn;