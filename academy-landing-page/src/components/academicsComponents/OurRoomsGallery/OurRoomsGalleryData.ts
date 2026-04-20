export interface RoomItem {
    id: number;
    category: string;
    title: string;
    description: string;
    images: string[];
}

export const roomsData: RoomItem[] = [
    {
        id: 1,
        category: "Classrooms",
        title: "Classrooms",
        description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
        images: [
            "/assets/AcademyImg/ClassRooms1.png",
            "/assets/AcademyImg/ClassRooms2.png",
            "/assets/AcademyImg/ClassRooms3.png",
            "/assets/AcademyImg/ClassRoom4.png"
        ]
    },
    {
        id: 2,
        category: "Library",
        title: "Library",
        description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development through a vast collection of resources.",
        images: [
            "/assets/AcademyImg/lib1.png",
            "/assets/AcademyImg/lib2.png",
            "/assets/AcademyImg/lib3.png",
            "/assets/AcademyImg/lib4.png"
        ]
    },
    {
        id: 3,
        category: "Science Lab",
        title: "Science Lab",
        description: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way, making learning science an exciting adventure.",
        images: [
            "/assets/AcademyImg/Slab1.png",
            "/assets/AcademyImg/Slab2.png",
            "/assets/AcademyImg/Slab3.png",
            "/assets/AcademyImg/Slab4.png"
        ]
    },
    {
        id: 4,
        category: "Computer Lab",
        title: "Computer Lab",
        description: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills through guided exploration.",
        images: [
            "/assets/AcademyImg/Clab1.png",
            "/assets/AcademyImg/Clab2.png",
            "/assets/AcademyImg/Clab3.png",
            "/assets/AcademyImg/Clab4.png"
        ]
    },
    {
        id: 5,
        category: "Garden",
        title: "Garden and Nature Area",
        description: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment through outdoor activities.",
        images: [
            "/assets/AcademyImg/Garden1.png",
            "/assets/AcademyImg/Garden2.png",
            "/assets/AcademyImg/Garden3.png",
            "/assets/AcademyImg/Garden4.png"
        ]
    }
];