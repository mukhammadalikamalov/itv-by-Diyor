import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import HideAppBar from "../../layout/Header";
import Caroucel from "../../layout/Caroucel";
import Footer from "../../layout/Footer";

const ShowsById = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShowById = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/shows/${id}`);
                setShow(response.data); // Assuming response.data is an object with show details
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchShowById();
    }, [id]); // Depend on id to re-run useEffect when id changes

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress color="primary" />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Typography variant="h6" color="error">
                    Error: {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: "black", color: "#fff", minHeight: "200vh", padding: "20px" }}>
            <HideAppBar />
            <Caroucel />
            {show && (
                <Box>
                    <Box sx={{ display: "flex", marginTop: "30px", borderRadius: "40px", gap: '10px', marginLeft: '13%' }}>
                        <Button variant="contained" color="primary">
                            Tavsif
                        </Button>
                        <Button variant="contained" color="secondary">
                            Aktyor va Ijodkorlar
                        </Button>
                        <Button variant="contained" color="info">
                            Sharhlar
                        </Button>
                    </Box>

                    <Box sx={{ marginLeft: '13%', borderRadius: '10px', marginTop: '30px' }}>

                        <img src={show.media[0]} alt={show.title} style={{ height: '60vh', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }} />
                        <Box sx={{ marginTop: '-33.5%' }}>
                            <Typography variant="body2" sx={{ marginLeft: "26%", width: '370px', color: 'rgba(255, 255, 255, 0.5)' }}>{show.genre}</Typography>
                            <Typography variant="h6" sx={{ mt: 2, marginLeft: "26%", width: 'auto', maxWidth: "500px" }}>{show.description}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 35 }}>
                            <Typography variant="h4" sx={{ color: '#fff', mb: 2, marginTop: "-190px" }}>Kadrlar</Typography>
                            {show.kadr.map((snapshot, index) => (
                                <img key={index} src={snapshot} alt={`Snapshot ${index}`} style={{ display: 'flex', width: '19%', height: "19vh", margin: '16px', borderRadius: '14px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }} />
                            ))}
                        </Box>
                        {/* Display other details as needed */}
                    </Box>
                </Box>

            )}
            <Footer />
        </Box>
    );
};

export default ShowsById;
