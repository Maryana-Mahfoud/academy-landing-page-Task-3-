import "./ourBenefits.css"
interface BenefitItem {
    icon: string;
    titleCard: string;
    paragraphCard: string;
}

export interface BenefitsProps {
    subTitle: string;
    title: string;
    paragraph: string;
    benefitsData: BenefitItem[]; 
}

const OurBenefits = ({ subTitle, title, paragraph, benefitsData }: BenefitsProps) => {
    return (
        <section className="benefits-section">
            <div className="section-title">
                <span className="sub-title">{subTitle}</span>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="benefits-grid">
                {benefitsData.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <div className="icon-box">
                            <img src={benefit.icon} alt={benefit.titleCard} />
                        </div>
                        <div className="card-content">
                            <h3>{benefit.titleCard}</h3>
                            <p>{benefit.paragraphCard}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurBenefits;
