
import "./NavigatethroughourPages.css"
export interface PageItem {
    id: number;
    title: string;
    description: string;
    link: string;
}

export interface NavigatePagesProps {
    subTitle: string;
    title: string;
    paragraph: string;
    pagesData: PageItem[];
}

const NavigatethroughourPages = ({ subTitle, title, paragraph, pagesData }: NavigatePagesProps) => {
    return (
        <section className="navigate-section">
            <div className="section-title">
                <span className="sub-title">{subTitle}</span>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="pages-grid">
                {pagesData.map((page) => (
                    <div key={page.id} className="page-card">
                        <h3>{page.title}</h3>
                        
                    <div className="nav-card-divider">
                        <span className="nav-dot"></span>
                        <div className="nav-dashed-line"></div>
                        <span className="nav-dot"></span>
                    </div>


                        <p>{page.description}</p>
                        
                        <button className="learn-more-btn">
                            Learn More <span className="arrow">→</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default NavigatethroughourPages;
