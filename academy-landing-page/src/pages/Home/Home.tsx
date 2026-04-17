//Hero
import Hero from "../../components/Hero/Hero";
import { heroData } from "../../components/Hero/HeroData";
//OurBenefits
import OurBenefits from "../../components/ourBenefits/ourBenifits";
import { benefitsData } from "../../components/ourBenefits/ourBenifitsData";
//OurTestimonials
import { testimonialsData } from "../../components/OurTestimonials/ourTestimonialsData";
import OurTestimonials from "../../components/OurTestimonials/ourTestimonials";
//FrequentlyAskedQuestions
import { faqData } from "../../components/frequentlyAskedQuestions/frequentlyAskedQuestionsData";
//FrequentlyAskedQuestions
import FrequentlyAskedQuestions from "../../components/frequentlyAskedQuestions/frequentlyAskedQuestions";
import NavigatethroughourPages from "../../components/NavigatethroughourPages/NavigatethroughourPages";
import { pagesData } from "../../components/NavigatethroughourPages/NavigatethroughourPagesData";


const Home = () => {
    
    return (
        <>
        <Hero {...heroData} />
        <main>
            <section>
            <OurBenefits 
                subTitle="Children Deserve Bright Future"
                title="Our Benefits"
                paragraph="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
                benefitsData={benefitsData} 
            />
            </section>
            
            <section>
            <OurTestimonials
                subTitle="Their Happy Words !!" 
                title="Our Testimonials" 
                paragraph="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both socially and academically."
                testimonialsData={testimonialsData} 
            />
            </section>

            <section>
            <FrequentlyAskedQuestions
                subTitle="Solutions For The Doubts" 
                title="Frequently Asked Questions" 
                paragraph="Find all the essential information you need to know about Little Learners Academy, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
                faqData={faqData}
            />
            </section>

            <section>
            <NavigatethroughourPages
                subTitle="Explore More" 
                title="Navigate through our Pages" 
                paragraph="Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school."
                pagesData={pagesData}
            />
            </section>
        </main>
        </>

    );
    };

export default Home;
