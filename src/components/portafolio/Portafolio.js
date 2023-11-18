import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import PortafolioBlock from "./PortafolioBlock";

export default function Portafolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortafolioBlock image={project.image} live={project.live} source={project.source} title={project.title} type={project.type}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
