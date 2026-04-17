import { useState } from "react";
import "./frequentlyAskedQuestions.css";

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface FAQProps {
    subTitle: string;
    title: string;
    paragraph: string;
    faqData: FAQItem[];
}

const FrequentlyAskedQuestions = ({ subTitle, title, paragraph, faqData }: FAQProps) => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq-section">
            <div className="section-title">
                <span className="sub-title">{subTitle}</span>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
            <div className="faq-grid">
                {faqData.map((item) => (
                    <div 
                        key={item.id} 
                        className={`faq-item ${openId === item.id ? "active" : ""}`}
                    >
                        <div className="faq-question" onClick={() => toggleFAQ(item.id)}>
                            <h3>{item.question}</h3>
                            <button className="toggle-icon">
                                {openId === item.id ? "−" : "+"}
                            </button>
                        </div>

                        {openId === item.id && (
                            <div className="faq-answer">
                                <hr />
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;