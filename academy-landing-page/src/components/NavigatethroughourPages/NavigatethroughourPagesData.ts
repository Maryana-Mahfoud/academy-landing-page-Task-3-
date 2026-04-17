
export interface PageItem {
    id: number;
    title: string;
    description: string;
    link: string;
}

export const pagesData: PageItem[] = [
    {
        id: 1,
        title: "About Us",
        description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
        link: "/about"
    },
    {
        id: 2,
        title: "Academics",
        description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
        link: "/academics"
    },
    {
        id: 3,
        title: "Student Life",
        description: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
        link: "/student-life"
    },
    {
        id: 4,
        title: "Admissions",
        description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
        link: "/admissions"
    }
];