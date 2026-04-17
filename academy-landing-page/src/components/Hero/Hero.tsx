
import "./Hero.css"
interface StatItem {
    value: string;
    label: string;
}

export interface HeroProps {
    image: string;
    subTitle: string;
    title: string;
    paragraph: string;
    importantTitle: string;
    stats: StatItem[]; 
}

const Hero = ({ image, subTitle, title, importantTitle, paragraph, stats }: HeroProps) => {
    const totalDots = 20;
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-image-wrapper">
                    <div className="dots-container">
                        {[...Array(totalDots)].map((_, i) => (
                            <div 
                                key={i} 
                                className="dot" 
                                style={{ "--i": i, "--total": totalDots } as React.CSSProperties}
                            ></div>
                        ))}
                    </div>
                    <img src={image} alt="Hero" className="main-hero-img" />
                </div>
                <div className="hero-content">
                    <div className="hero-text-top">
                        <span className="hero-subtitle">{subTitle}</span>
                        <h1 className="hero-title">{title}
                            <span> {importantTitle}</span>
                        </h1>
                        <p className="hero-paragraph">{paragraph}</p>
                    </div>
                    <div className="hero-stats-card">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;





















