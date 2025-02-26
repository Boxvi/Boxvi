import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";
import Style from './BaseLayout.module.scss'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Portafolio from "./portafolio/Portafolio";
import About from "./about/About";
import Goals2025 from "./goals_2025/Goals2025";


export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);

    function handleToggleDarkMode() {
        let oppositeOfCurrentDarkMode = !darkMode
        console.log(oppositeOfCurrentDarkMode)
        localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
        setDarkMode(oppositeOfCurrentDarkMode)
    }

    useEffect(() => {
        let detectedDarkMode = eval(localStorage.getItem('darkMode'));

        if (detectedDarkMode) {
            setDarkMode(detectedDarkMode)
        } else {
            localStorage.setItem('darkMode', 'false')

        }
    }, [])

    let anioActual = new Date().getFullYear();

    return (
        <Box className={darkMode ? Style.dark : Style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
                </Grid>
                <Grid item flexGrow={1}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/boris-quizhpe/" replace />} />


                        <Route exact path={'/boris-quizhpe/'} element={<Home />} />
                        <Route exact path={'/boris-quizhpe/about'} element={<About />} />
                        <Route exact path={'/boris-quizhpe/portafolio'} element={<Portafolio />} />
                        <Route exact path={'/boris-quizhpe/goals2025'} element={<Goals2025 />} />
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <p>Boris Quizhpe</p>
                        <p>{anioActual}, 3.0.0</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
