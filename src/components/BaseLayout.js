import {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import Navbar from "./Navbar";
import Style from './BaseLayout.module.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import Portafolio from "./portafolio/Portafolio";
import About from "./about/About";


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
                    <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
                </Grid>
                <Grid item flexGrow={1}>
                    <Routes>
                        <Route exact path={'/'} element={<Home/>}/>
                        <Route exact path={'/about'} element={<About/>}/>
                        <Route exact path={'/portafolio'} element={<Portafolio/>}/>
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                         py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                        <p>Boris Quizhpe</p>
                        <p>{anioActual}</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
