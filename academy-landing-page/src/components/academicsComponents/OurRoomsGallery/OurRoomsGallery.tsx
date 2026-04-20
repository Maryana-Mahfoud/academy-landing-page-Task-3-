import { useState } from "react";
import "./OurRoomsGallery.css";

export interface RoomItem {
    id: number;
    category: string;
    title: string;
    description: string;
    images: string[];
}

export interface OurRoomsProps {
    subTitle: string;
    title: string;
    paragraph: string;
    roomsData: RoomItem[];
}

const RoomRow = ({ room }: { room: RoomItem }) => {
    const [images, setImages] = useState(room.images);

    const handleNext = () => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            const first = newImages.shift();
            if (first) newImages.push(first);
            return newImages;
        });
    };

    const handlePrev = () => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            const last = newImages.pop();
            if (last) newImages.unshift(last);
            return newImages;
        });
    };

    return (
        <div className="room-row">
            <div className="room-images-grid">
                {images.map((img, index) => (
                    <div key={index} className="room-image-card">
                        <img src={img} alt={`${room.title} ${index}`} />
                    </div>
                ))}
            </div>

            <div className="room-info-footer">
                <div className="title-controls-wrapper">
                    <h3>{room.title}</h3>
                    <div className="row-controls">
                        <button className="nav-btn" onClick={handlePrev}>
                            <img src="/assets/Images/leftArrow.png" alt="prev" />
                        </button>
                        <button className="nav-btn" onClick={handleNext}>
                            <img src="/assets/Images/rightArrow.png" alt="next" />
                        </button>
                    </div>
                </div>
                <p className="room-description">{room.description}</p>
            </div>
        </div>
    );
};

const OurRoomsGallery = ({ subTitle, title, paragraph, roomsData }: OurRoomsProps) => {
    
    const [activeFilter, setActiveFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(roomsData.map((room) => room.category)))];
    const filteredRooms = activeFilter === "All" 
        ? roomsData 
        : roomsData.filter(room => room.category === activeFilter);

    return (
        <section className="rooms-gallery-section">
            <div className="section-header">
                <span className="sub-title-badge">{subTitle}</span>
                <h2>{title}</h2>
                <p className="main-paragraph">{paragraph}</p>
            </div>
            <div className="filter-buttons-container">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="rooms-container">
                {filteredRooms.map((room) => (
                    <RoomRow key={room.id} room={room} />
                ))}
            </div>
        </section>
    );
};

export default OurRoomsGallery;