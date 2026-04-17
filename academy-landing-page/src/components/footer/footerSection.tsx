
import { footerLinks , socialLinks } from "./footerData.ts";
import "./footerSection.css";
const FooterSection = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                
                <div className="footer-info">
                    <div className="footer-logo">
                        <img src= "/assets/Images/footerPhoto1.png" alt="Little Learners Logo" />
                        <span>Little Learners</span>
                    </div>
                    <p className="footer-brief">
                        We believe in the power of play to foster creativity, problem-solving skills, and imagination.
                    </p>
                    <div className="contact-list">
                        <ul>
                            <li>
                                <div className="contact-item-icon">
                                    <img src="/assets/Images/message.png" alt="email" />
                                </div>
                                <span>hello@littlelearners.com</span>
                            </li>
                            <li>
                                <div className="contact-item-icon">
                                    <img src="/assets/Images/Phone.png" alt="phone" />
                                </div>
                                <span>+91 91813 23 2309</span>
                            </li>
                            <li>
                                <div className="contact-item-icon">
                                    <img src="/assets/Images/location.png" alt="location" />
                                </div>
                                <span>Somewhere in the World</span>
                            </li>
                        </ul>
                    </div>

                </div>

                
                <div className="footer-links-grid">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="footer-column">
                            <h4>{section.title}</h4>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="footer-bottom">
                <div className="bottom-content">
                    <div className="policy-links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                    
                    <div className="copyright">
                        Copyright © {new Date().getFullYear()} Little Learners Academy. All rights reserved.
                    </div>

                    <div className="social-icons">
                        {socialLinks.map((social) => (
                            <a key={social.id} href={social.url} className="social-box">
                                <img src={social.icon} alt="social" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default FooterSection;