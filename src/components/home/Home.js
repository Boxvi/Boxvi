import { Box } from "@mui/material";
import Style from './Home.module.scss';
import { info } from "../../info/Info";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import classNames from 'classnames';
import me from '../../img/self.png';
import cv from "../../info/hoja_de_presentacion_boris_quizhpe_desarrollador_software.pdf"

export default function Home() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
                height={{ xs: '35vh', md: '40vh' }}
                borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
            <Box>
                <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
                </h1>
                <h2>I'm {info.position}.</h2>
                <Box component={'ul'} p={'0.8rem'}>
                    {info.miniBio.map((bio, index) => (
                        <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                    ))}
                </Box>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
                    {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                    ))}
                </Box>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
                    <a href={cv} download="cv_boris_quizhpe_desarrollador.pdf" style={{ textDecoration: 'none' }}>
                        <button style={{
                            fontSize: '1rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '5px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Descargar HOJA DE VIDA
                        </button>
                    </a>

                </Box>



            </Box>
        </Box>
    )
}
