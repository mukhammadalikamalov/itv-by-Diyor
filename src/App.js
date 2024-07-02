import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Box, Typography, Grid, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import HideAppBar from "./layout/Header";
import Footer from "./layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caroucel from "./layout/Caroucel";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function App() {
  const [randomizedData, setRandomizedData] = useState([]);
  const [sections, setSections] = useState([]);
  const [touchedCard, setTouchedCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data, isLoading, error } = useQuery("films", async () => {
    const res = await axios.get("http://localhost:3001/shows");
    console.log("API Response:", res.data);
    return res.data;
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const shuffledData = shuffleArray(data);
      const slicedData = shuffledData.slice(0, 60);
      setRandomizedData(slicedData);

      const categories = [...new Set(slicedData.map((item) => item.type))];
      categories.sort();

      const initialSections = categories
        .slice(0, 2)
        .map((category, index) => ({
          slider: `slider${index + 1}`,
          type: category,
          arr: slicedData.filter((item) => item.type === category),
          cardsToShow: 12,
        }));

      setSections(initialSections);
    }
  }, [data]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCardHover = (id) => {
    setTouchedCard(id);
  };

  const handleMouseLeave = () => {
    setTouchedCard(null);
  };

  const showMoreCards = (sectionIndex) => {
    setLoading(true);

    setTimeout(() => {
      setSections((prevSections) => {
        const updatedSections = [...prevSections];
        updatedSections[sectionIndex].cardsToShow += 12;

        const categories = [...new Set(randomizedData.map((item) => item.type))];
        const slicedData = randomizedData.slice(0, 60);

        if (sectionIndex === prevSections.length - 1) {
          const remainingCategories = categories.filter(
            (cat) => !prevSections.some((section) => section.type === cat)
          );
          const newSectionsToAdd = remainingCategories
            .slice(0, 2)
            .map((category) => ({
              slider: `slider${updatedSections.length + 1}`,
              type: category,
              arr: slicedData.filter((item) => item.type === category),
              cardsToShow: 12,
            }));

          return [...updatedSections, ...newSectionsToAdd];
        }

        return updatedSections;
      });

      setLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Box sx={{ bgcolor: "black", color: "#fff" }}>
      <HideAppBar />
      <Box sx={{ mt: "-64px" }}>
        <Caroucel />
      </Box>

      {sections.map((section, index) => (
        <Box key={section.slider} sx={{ mt: 2, maxWidth: 'lg', marginLeft: '10%', color: '#fff' }} >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pl: 2, pr: 2 }}>
            <Typography variant="h4">{section.type}
              <NavigateNextIcon />
            </Typography>
          </Box>
          <Slider {...settings} className={section.slider}>
            {section.arr.slice(0, section.cardsToShow).map((show) => (
              <RouterLink to={`/shows/${show.id}`} key={show.id} style={{ textDecoration: "none", color: "#fff" }}>
                <Box
                  key={show.id}
                  sx={{
                    p: 1,
                    position: "relative",
                    "&:hover img": {
                      filter: "brightness(70%)",
                    },
                    "&:hover .play-icon": {
                      opacity: 1,
                    },
                  }}
                  onMouseEnter={() => handleCardHover(show.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: "100%" }}
                  >
                    <Grid item>
                      {show.media && show.media.length > 0 && (
                        <>
                          <img
                            src={show.media[0]}
                            alt={show.title}
                            style={{
                              maxWidth: "98%",
                              height: "auto",
                              borderRadius: "10px",
                              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                              transition: "filter 0.3s ease-in-out",
                            }}
                          />
                          {touchedCard === show.id && show.rating && (
                            <Typography
                              variant="body2"
                              sx={{
                                position: "absolute",
                                top: "6%",
                                left: "11%",
                                transform: "translate(-50%, -50%)",
                                color: "#fff",
                                fontFamily: "inherit",
                                opacity: 1,
                                transition: "opacity 0.3s ease-in-out",
                                fontSize: "27px",
                              }}
                            >
                              {show.rating}
                            </Typography>
                          )}
                          {touchedCard === show.id && show.genre && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="38"
                              height="36"
                              viewBox="0 0 38 26"
                              fill="none"
                              style={{
                                position: "absolute",
                                top: "16%",
                                left: "11%",
                                transform: "translate(-50%, -50%)",
                                opacity: 1,
                                transition: "opacity 0.3s ease-in-out",
                              }}
                            >
                              <g clipPath="url(#rating-itv_svg__clip0)">
                                <path
                                  fill="#fff"
                                  d="M5.149 5.595a2.375 2.375 0 100-4.751 2.375 2.375 0 000 4.75zM33.65 6.951l-4.75 8.142-4.75-8.142H19.4l7.125 12.893h4.75L38.4 6.951h-4.75zM.398 6.951v4.751a2.37 2.37 0 012.37 2.37v5.769h4.755v-5.765A7.133 7.133 0 00.398 6.95zM21.186 15.094h-4.499a2.37 2.37 0 01-2.37-2.37v-1.017h5l-2.63-4.756h-2.37V3.216h-4.74v9.505a7.133 7.133 0 007.124 7.124h7.124l-2.64-4.75z"
                                />
                              </g>
                              <defs>
                                <clipPath id="rating-itv_svg__clip0">
                                  <path fill="#fff" d="M0 0h38v26H0z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                          <span
                            className="material-icons-round play-icon"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "#514844",
                              fontSize: "64px",
                              borderRadius: "50%",
                              opacity: touchedCard === show.id ? 1 : 0,
                              transition: "opacity 0.3s ease-in-out",
                            }}
                          >
                            play_circle
                          </span>
                        </>
                      )}
                      <Typography variant="h6" sx={{ mt: 1, color: "#fff" }}>
                        {show.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ mt: 1, color: "green" }}>
                        Obuna
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </RouterLink>
            ))}
          </Slider>
          {section.cardsToShow < section.arr.length && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              {loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                <Button
                  style={{ width: "80%", height: '7vh', backgroundColor: 'rgb(29, 31, 30)', borderRadius: '10px' }}
                  variant="contained"
                  color="primary"
                  onClick={() => showMoreCards(index)}
                >
                  {section.cardsToShow + 12 < section.arr.length
                    ? "Yuklanmoqda..."
                    : "Ko'proq Ko'rsatish"}
                </Button>
              )}
            </Box>
          )}
        </Box>
      ))}

      <Footer />
    </Box>
  );
}

export default App;
