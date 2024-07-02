import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NavLink as RouterNavLink } from 'react-router-dom';

import FilmsPage from '../pages/Films.Page/FilmsPage';
import ObunalarPage from '../pages/Subscribtions.Page/ObunalarPage';
import SeriesPage from '../pages/Series.Page/SeriesPage';

function HideAppBar(props) {
    const [activeLink, setActiveLink] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleLinkHover = (index) => {
        setActiveLink(index);
    };

    const handleLinkLeave = () => {
        setActiveLink(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: visible ? "transparent" : "#1D1F1E", // Change background color based on visibility
                    height: '80px',
                    transition: 'background-color 0.3s ease',
                    boxShadow: "0",
                }}
            >
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: '100px' }}>
                        <Box sx={{ marginLeft: '90px' }}>
                            <svg width="66" height="33" viewBox="0 0 66 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.249 8.251a4.126 4.126 0 100-8.25 4.126 4.126 0 000 8.25zM57.748 10.607L49.5 24.749l-8.252-14.142H33L45.374 33h8.252L66 10.607h-8.252zM0 10.607v8.251a4.117 4.117 0 014.117 4.117v10.02h8.257V22.98A12.39 12.39 0 000 10.607zM36.1 24.748h-7.814a4.117 4.117 0 01-4.117-4.116v-1.765h8.684l-4.567-8.26h-4.117v-6.49h-8.234v16.509A12.39 12.39 0 0028.31 33h12.374l-4.585-8.252z" fill="#52B038"></path></svg>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', fontFamily: 'inherit', marginRight: '40%' }}>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink exact to="/" activeClassName="active" onMouseEnter={() => handleLinkHover(0)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 0 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none' }}>Bosh sahifa</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink activeClassName="active" onMouseEnter={() => handleLinkHover(0)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 0 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>TV</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink to="/films" activeClassName="active" onMouseEnter={() => handleLinkHover(1)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 1 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Films</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink to="/series" activeClassName="active" onMouseEnter={() => handleLinkHover(2)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 2 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Series</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink activeClassName="active" onMouseEnter={() => handleLinkHover(0)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 0 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Multfilmlar</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink to="/obunalar" activeClassName="active" onMouseEnter={() => handleLinkHover(3)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 3 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Obunalar</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <RouterNavLink activeClassName="active" onMouseEnter={() => handleLinkHover(4)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 4 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Boshqalar</RouterNavLink>
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    <FilmsPage />
                    <ObunalarPage />
                    <SeriesPage />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default HideAppBar;
