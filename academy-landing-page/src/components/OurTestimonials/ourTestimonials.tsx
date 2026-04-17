
import { useState, useEffect } from "react";
import "./ourTestimonials.css";

export interface TestimonialItem {
    id: number;
    image: string;      
    name: string;      
    starsimage: string;      
    reviewText: string; 
}

export interface OurTestimonialsProps {
    subTitle: string;
    title: string;
    paragraph: string;
    testimonialsData: TestimonialItem[];
}

const OurTestimonials = ({ subTitle, title, paragraph, testimonialsData }: OurTestimonialsProps) => {
    const [data, setData] = useState<TestimonialItem[]>(testimonialsData);
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
        <section className="testimonials-section">
            <div className="section-title">
                <span className="sub-title">{subTitle}</span>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
            
            <div className="testimonials-main-wrapper">
                <button className="nav-btn side-btn prev" onClick={handlePrev}>
                    <img src="/assets/Images/leftArrow.png" alt="prev" />
                </button>

                <div className="testimonials-grid">
                    
                    {data.slice(0, getVisibleCount()).map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} className="user-avatar" />
                            <h3>{testimonial.name}</h3>
                            <div className="stars-pill">
                                <img src={testimonial.starsimage} alt="rating" className="stars-graphic" />
                            </div>
                            <p className="testimonial-desc">{testimonial.reviewText}</p>
                        </div>
                    ))}
                </div>

                <button className="nav-btn side-btn next" onClick={handleNext}>
                    <img src="/assets/Images/rightArrow.png" alt="next" />
                </button>
            </div>

            <div className="mobile-only-controls">
                <button className="nav-btn" onClick={handlePrev}>
                    <img src="/assets/Images/leftArrow.png" alt="prev" />
                </button>
                <button className="nav-btn" onClick={handleNext}>
                    <img src="/assets/Images/rightArrow.png" alt="next" />
                </button>
            </div>
        </section>
    );
};

export default OurTestimonials;






