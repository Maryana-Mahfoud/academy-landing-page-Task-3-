
import "./ourTeamMembers.css";

interface cardProp {
    id: number,
    img: string,
    t_Name: string,
    icon: string,
    cardTitle: string,
    cardPar: string,
}

interface ourTeamMembersProps {
    subTitle: string,
    title: string,
    pargraph: string,
    cards: cardProp[],
}
const OurTeamMembers = ({ subTitle, title, pargraph, cards }: ourTeamMembersProps) => {
    return (
        <section className="team-section">
            
            <div className="team-header">
                <span className="team-badge">{subTitle}</span>
                <h2 className="main-title">{title}</h2>
                <p className="team-description">{pargraph}</p>
            </div>

            <div className="team-grid">
                {cards.map((card) => (
                    <div key={card.id} className="team-card">
                        <div className="card-top-row">
                            <div className="teacher-profile">
                                <div className="img-container">
                                    <img src={card.img} alt={card.t_Name} />
                                </div>
                                <h3 className="teacher-name">{card.t_Name}</h3>
                            </div>
                            <div className="icon-box">
                                <img src={card.icon} alt="email icon" />
                            </div>
                        </div>

                        <div className="qualification-container">
                            <h4 className="qualification-heading">{card.cardTitle}</h4>
                            <p className="qualification-desc">{card.cardPar}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default OurTeamMembers;

