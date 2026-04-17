import {type TestimonialItem } from "./ourTestimonials.tsx";
import user1 from "/assets/Images/GirlImage.png";
import user2 from "/assets/Images/ManImage.png";
import user3 from "/assets/Images/BoyImage.png";


export const testimonialsData: TestimonialItem[] = [
    {
        id: 1,
        image: user1,
        name: "Jennifer B",
        starsimage:"/assets/Images/stars.png",
        reviewText: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        id: 2,
        image: user2,
        name: "David K",
        starsimage:"/assets/Images/stars.png",
        reviewText: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
        id: 3,
        image: user3,
        name: "Emily L",
        starsimage:"/assets/Images/stars.png",
        reviewText: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    }
];