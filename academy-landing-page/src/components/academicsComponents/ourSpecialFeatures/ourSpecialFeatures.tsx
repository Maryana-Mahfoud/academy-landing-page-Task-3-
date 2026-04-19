import "./ourSpecialFeatures.css"
interface FeatureCard {
    id: number;
    icon: string;
    title: string;
    pargraph: string; 
}

interface FeatureProps {
    subTitle: string;
    featureTitle: string;
    featurePar: string;
    cardsItem: FeatureCard[];
}


const ourSpecialFeatures = ({ subTitle, featureTitle, featurePar, cardsItem }: FeatureProps) => {
    return (
        <section className="features-section">
            <div className="features-section__header">
                <span className="features-section__badge">{subTitle}</span>
                <h2 className="features-section__title">{featureTitle}</h2>
                <p className="features-section__subtitle">{featurePar}</p>
            </div>
            
            <div className="features-section__grid">
                
                {cardsItem.map((feature: FeatureCard) => (
                    <div key={feature.id} className="features-section__card">
                        <div className="features-section__icon-container">
                            <img src={feature.icon} alt={feature.title} /> 
                        </div>
                        <h3 className="features-section__card-title">{feature.title}</h3>
                        <p className="features-section__card-text">{feature.pargraph}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ourSpecialFeatures;
