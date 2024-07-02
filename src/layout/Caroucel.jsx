import { useEffect, useState } from "react";

const defaultCardStyles = {
    margin: "0", // No margin
    width: "100vw", // Full width
    height: "100vh", // Full height
    position: "relative", // Position relative for containing the buttons
    maxWidth: "100%", // Full width
    overflow: "hidden", // Hide overflow
};

const styles = {
    cardCarousel: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "0", // No margin bottom
        width: "100vw", // Full width
        height: "100vh", // Full height
        position: "relative", // Position relative for containing the buttons

    },
    cardContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100vw", // Full width
        height: "100vh", // Full height
    },
    timeoutIndicator: {
        position: "absolute",
        bottom: "130px",
        right: "20px",
        backgroundColor: "rgba(0, 128, 0, 0.8)",
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "bold",
        zIndex: "2",
    },
    gradientOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "20%",
        background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
        zIndex: "1",
    },
    imageStyles: {
        width: "100%",
        height: "95vh",
        objectFit: "cover",

    },
    timeoutDisplay: {
        position: "absolute",
        bottom: "50px",
        color: "green",
        fontSize: "18px",
        backgroundColor: 'transparent',
        zIndex: "2",
    },
    buttonStyles: {
        position: "absolute",
        left: "175px",
        top: "65%",
        transform: "translateY(-50%)",
        backgroundColor: "#52B038",
        color: "white",
        padding: "16px 80px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        zIndex: "2",
        fontSize: "17px",
        fontWeight: "500",
    },
};

const CardCarousel = ({ cards, title, maxCardsToShow }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [timeoutValue, setTimeoutValue] = useState(10);

    const nextCard = () => {
        const nextIndex = (startIndex + 1) % cards.length;
        setStartIndex(nextIndex);
        setTimeoutValue(10); // Reset timeout
    };

    const prevCard = () => {
        const prevIndex = (startIndex - 1 + cards.length) % cards.length;
        setStartIndex(prevIndex);
        setTimeoutValue(10); // Reset timeout
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeoutValue((prevTimeout) => {
                if (prevTimeout === 1) {
                    nextCard();
                    return 10;
                }
                return prevTimeout - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [startIndex, cards.length]);

    return (
        <div style={styles.cardCarousel}>
            <div style={styles.cardContainer}>
                {cards.slice(startIndex, startIndex + maxCardsToShow).map((card, index) => (
                    <div key={index} className="active" style={{ ...defaultCardStyles }}>
                        <img src={card.imageUrl} alt={card.title} style={styles.imageStyles} />
                        <div style={styles.gradientOverlay}></div>
                        <button style={styles.buttonStyles}>Ko'rish</button>
                    </div>
                ))}
                <div style={styles.timeoutIndicator}>
                    {timeoutValue}
                </div>
            </div>
        </div>
    );
};

const cards = [
    {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/24//b55fc2d569d49dfc0a5e59ed2af2e79a-q-900x600.jpeg",
    },
    {
        title: "Card 2",
        description: "Description for Card 2",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/25//80a1281f80ed0613784b4f9c09d1d779-q-900x600.jpeg",
    },
    {
        title: "Card 3",
        description: "Description for Card 3",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/20//11ac76fde88811ff5744f28571efb742-q-900x600.jpeg",
    },
    {
        title: "Card 4",
        description: "Description for Card 4",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/05//6d530f7094a078e80e4903ea3dd0ed4c-q-900x600.jpeg",
    },
    {
        title: "Card 5",
        description: "Description for Card 5",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/12//88e1211fcd9bc3bbc416441d703cb60f-q-900x600.jpeg",
    },
    {
        title: "Card 6",
        description: "Description for Card 6",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/09//fa9b411ea28f98c2422c5cf20a672fc1-q-900x600.jpeg",
    },
    {
        title: "Card 7",
        description: "Description for Card 7",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/04//3b42831bc14548e95cd057a0bf79bc68-q-900x600.jpeg",
    },
    {
        title: "Card 8",
        description: "Description for Card 8",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/03/18//52fa82d0c1d9ccda3c9596f2eec2ac58-q-900x600.jpeg",
    },
    {
        title: "Card 9",
        description: "Description for Card 9",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/05/15//c8a09c92f810346a2d163ed79e2e76c0-q-900x600.jpeg",
    },
    {
        title: "Card 10",
        description: "Description for Card 10",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/06//c01744ef18aa3251c621e956c0544cd6-q-900x600.jpeg",
    },
    {
        title: "Card 11",
        description: "Description for Card 11",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/04/03//146d4278ff054ab3ba6e7dbb4edcca5c-q-900x600.jpeg",
    },
    {
        title: "Card 12",
        description: "Description for Card 12",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/06/03//90f6a4d06e5dc55f8122d5e0ecdcc6cd-q-900x600.jpeg",
    },
    {
        title: "Card 13",
        description: "Description for Card 13",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/01/26//f7e61ed7912217535bdff9aeeb88fede-q-900x600.jpeg",
    },
    {
        title: "Card 14",
        description: "Description for Card 14",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/05/06//16153e2503de790d82bbbe2a871ba356-q-900x600.jpeg",
    },
    {
        title: "Card 15",
        description: "Description for Card 15",
        imageUrl: "https://files.itv.uz/uploads/helper/2024/05/06//88141578c1eeef9831a119f9e631b033-q-900x600.jpeg",
    },
];

const Caroucel = () => {
    return (
        <div>
            <CardCarousel cards={cards} title="Cards" maxCardsToShow={1} />
        </div>
    );
};

export default Caroucel;
