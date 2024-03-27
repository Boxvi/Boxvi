import IconLink from "./IconLink";
import {Box} from "@mui/material";

export default function PortafolioBlock(props) {
    const {live, source, title, type, image} = props;
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <h1 style={{fontSize: '2rem'}}>{title} - {type}</h1>
            <img src={image} width={"80%"} alt={title}/>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                 alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
                </Box>
                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                </Box>
            </Box>
        </Box>
    );
}
