import { info } from '../../info/Info';
import Style from '../about/Terminal.module.scss';
import { Box } from "@mui/material";
import Terminal from "../about/Terminal";

export default function Goals2025() {

    const firstName = info.firstName.toLowerCase()
    
    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                Objetivos 2025</p>
            <p><span style={{ color: info.baseColor }}>Objetivos 2025<span
                    className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.goals2025.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={miscText()} />
        </Box>

    )

}
/*
*/