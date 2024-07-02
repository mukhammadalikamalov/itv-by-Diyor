import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Telegram from '@mui/icons-material/Telegram'; // Import Telegram icon

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "rgba(29, 31, 30, 0.9)",
                p: 6,
                color: "white",
                height: '55vh',
                marginTop: '30px'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Biz Haqimizda
                        </Typography>
                        <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Kontaktlar
                        </Typography>
                        <Box>  <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Qo'llab Quvvatlash
                        </Typography></Box>
                        <Box>
                            <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                Obunalar
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                Hamkorlar
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ marginLeft: '-190px' }}>
                        <Typography variant="h6" gutterBottom>
                            Katalog
                        </Typography>
                        <Box><Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            TV
                        </Typography></Box>
                        <Box><Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Filmlar
                        </Typography></Box>

                        <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Seriallar
                        </Typography>
                        <Box>
                            <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                Multfilmlar
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ marginLeft: '-190px', marginTop: '35px' }} >
                        <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }} gutterBottom>
                            Uz Video
                        </Typography>
                        <Box><Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Anime
                        </Typography></Box>
                        <Box><Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Radio
                        </Typography></Box>

                        <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Axbarotlar
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ marginLeft: '-190px', marginTop: '35px' }}>
                        <Box>
                            <Typography variant="h7" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                Sport
                            </Typography>
                        </Box>
                    </Grid>
                    <Typography variant="h6" sx={{ marginTop: "45px" }} gutterBottom>
                        Ilovalar
                    </Typography>
                    <Grid item xs={12} sm={4} sx={{ marginRight: 5 }}>
                        <Typography variant="h6" gutterBottom style={{ width: '300px' }}>
                            Ijtimoiy Tarmoqlar
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit" sx={{ marginRight: 2 }}>
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ marginRight: 2 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit" sx={{ marginRight: 2 }}>
                            <Twitter />
                        </Link>
                        <Link href="https://telegram.me/" color="inherit">
                            <Telegram />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={7} >

                    <hr style={{ borderColor: 'rgba(275, 285, 265, 0.3)' }} />



                </Box>
                <Box>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        © 2015 - 2024 iTV (LLC ALPHAZET TECHNOLOGIES).v1.21.0
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
