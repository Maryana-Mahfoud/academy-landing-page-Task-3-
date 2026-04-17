import "./HeroAbout.css"
interface HeroAboutProps{
    subTitle:string,
    title:string,
    description:string,
    graphicImage:string
}

const HeroAbout = ({ subTitle, title, description, graphicImage }:HeroAboutProps) => {
    return (
        <>
            <div className="hero-about-content">
                    <div className="hero-graphic">
                        <img src={graphicImage} alt="design" />
                    </div>
                    
                    <div className="hero-text-grid">
                        <div className="title-side">
                            <span className="sub-badge">{subTitle}</span>
                            <h1>{title}</h1>
                        </div>
                        
                        <div className="description-side">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
        </>
    )
    }

export default HeroAbout
