
import "./ourMissionVisions.css"
interface MissionItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}
interface ourMissionVisionsProps{
    subTitle:string,
    title:string,
    paragraph:string,
    cardItem:MissionItem[],
}

const ourMissionVisions = ({subTitle,title,paragraph,cardItem}:ourMissionVisionsProps) => {
    return (
        <>
        <section className="mission-visions-section">
            <div className="section-header">
                <span className="sub-title-badge">{subTitle}</span>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="cards-grid">
                {cardItem.map((item) => (
                    <div className="card-item" key={item.id}>
                        <div className="card-header">
                            <h3>{item.title}</h3>
                            <img src={item.icon} alt={item.title} className="card-icon" />
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default ourMissionVisions
