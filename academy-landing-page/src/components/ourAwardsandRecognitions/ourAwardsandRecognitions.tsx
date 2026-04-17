import { useState, useEffect } from "react";
import "./ourAwardsandRecognitions.css";

export interface AwardItem {
    id: number;
    icon: string;      
    title: string;      
    description: string; 
}

export interface OurAwardsProps {
    subTitle: string;
    title: string;
    paragraph: string;
    awardsData: AwardItem[];
}

const OurAwards = ({ subTitle, title, paragraph, awardsData }: OurAwardsProps) => {
    const [data, setData] = useState<AwardItem[]>(awardsData);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getVisibleCount = () => {
        if (windowWidth <= 768) return 1;
        if (windowWidth <= 1200) return 2;
        return 3; 
    };

    const handleNext = () => {
        setData((prevData) => {
            const newData = [...prevData];
            const firstItem = newData.shift();
            if (firstItem) newData.push(firstItem);
            return newData;
        });
    };

    const handlePrev = () => {
        setData((prevData) => {
            const newData = [...prevData];
            const lastItem = newData.pop();
            if (lastItem) newData.unshift(lastItem);
            return newData;
        });
    };

    return (
        <section className="awards-section">
            <div className="section-header">
                <span className="sub-title-badge">{subTitle}</span>
                <h2>{title}</h2>
                <p className="par">{paragraph}</p>
            </div>
            
            <div className="awards-slider-wrapper">
                <div className="awards-grid">
                    {data.slice(0, getVisibleCount()).map((award) => (
                        <div key={award.id} className="award-card">
                            <div className="award-icon-container">
                                <img src={award.icon} alt="icon" />
                            </div>
                            <h3>{award.title}</h3>
                            <p className="award-desc">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="slider-controls">
                <div>
                    <span className="more-awards-text">8 More Awards</span>
                </div>
                <div className="nav-buttons">
                    <button className="nav-btn" onClick={handlePrev}>
                        <img src="/assets/Images/leftArrow.png" alt="prev" />
                    </button>
                    <button className="nav-btn" onClick={handleNext}>
                        <img src="/assets/Images/rightArrow.png" alt="next" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurAwards;