
export interface WhatStudentCard {
    id: number;
    icon: string; 
    title: string;
    pargraph: string;
}


export const whatStudentsLearnData: WhatStudentCard[] = [
    {
        id: 1,
        icon: "/assets/AcademyImg/student1.png", 
        title: "Language Arts",
        pargraph: "Reading, writing, storytelling, and communication skills."
    },
    {
        id: 2,
        icon: "/assets/AcademyImg/student2.png",
        title: "Mathematics",
        pargraph: "Number sense, basic operations, problem-solving, and logic."
    },
    {
        id: 3,
        icon: "/assets/AcademyImg/student3.png",
        title: "Science",
        pargraph: "Exploring the natural world through hands-on experiments and investigations."
    },
    {
        id: 4,
        icon: "/assets/AcademyImg/student4.png",
        title: "Social Studies",
        pargraph: "Cultivating an understanding of diverse cultures and communities."
    },
    {
        id: 5,
        icon: "/assets/AcademyImg/student5.png",
        title: "Arts and Crafts",
        pargraph: "Encouraging creativity through various art forms and crafts."
    },
    {
        id: 6,
        icon: "/assets/AcademyImg/student6.png",
        title: "Physical Education",
        pargraph: "Promoting physical fitness, coordination, and teamwork."
    }
];


export const whatStudentsLearnHeader = {
    subTitle: "Our Features",
    featureTitle: "What Students Learn",
    featurePar: "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include:"
};