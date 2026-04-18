
import "./ourHistory.css";

interface CardItemProps {
    id: number;
    icon: string;
    num: string;
    cardTitle: string;
    cardPar: string;
}

interface OurHistoryProps {
    subTitle: string;
    title: string;
    pargraph: string; 
    cardItem: CardItemProps[];
}

const OurHistory = ({ subTitle, title, pargraph, cardItem }: OurHistoryProps) => {
    return (
        <section className="history-section">
            <div className="section-header">
                <span className="sub-title-badge">{subTitle}</span>
                <h2>{title}</h2>
                <p className="par">{pargraph}</p>
            </div>

            <div className="history-container">
                <div className="history-list">
                    {cardItem.map((item) => (
                        <div key={item.id} className="history-item">
                            <span className="line-dot"></span>

                            <div className="item-body">
                                
                                <div className="history-card">
                                    <div className="history-icon">
                                        <img src={item.icon} alt="icon" />
                                    </div>
                                    <span className="year-text">{item.num}</span>
                                </div>
                                <div className="history-content">
                                    <h3>{item.cardTitle}</h3>
                                    <p>{item.cardPar}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurHistory;