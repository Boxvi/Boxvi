import self from "../img/self.png"
import uno from "../img/1.webp";
import dos from "../img/2.webp";
import tres from "../img/3.webp"
import cuatro from "../img/4.webp"
import cinco from "../img/5.webp"
import seis from "../img/6.webp"
import siete from "../img/7.webp"
import ocho from "../img/8.webp"
import nueve from "../img/9.webp"
import diez from "../img/10.webp"
import once from "../img/11.webp"
import doce from "../img/12.webp"
import trece from "../img/13.webp"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Boris",
    lastName: "Quizhpe",
    initials: "bq",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Ecuador'
        },
        {
            emoji: "💼",
            text: "Desarrollador de Software"
        },
        {
            emoji: "💻",
            text: "Soporte TI"
        },
        {
            emoji: "🛜",
            text: "Redes"
        },
        {
            emoji: "📧",
            text: "hola@boxvisoft.com"
        },
    ],
    socials: [
        {
            link: "https://github.com/Boxvi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://ec.linkedin.com/in/boris-quizhpe",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://wa.me/593996474990?text=Hola%20Boris,%20%C2%BFc%C3%B3mo%20te%20encuentras%20el%20d%C3%ADa%20de%20hoy?",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
        },
        {
            link: "https://www.facebook.com/profile.php?id=61566948676070",
            icon: "fa fa-facebook",
            label: 'facebook'
        }

    ],
    bio: "¡Hola! Soy Boris, desarrollador de software independiente con formación en el Tecnológico del Azuay. Disfruto de la resolución creativa de problemas y tengo un enfoque proactivo hacia la tecnología. Creo que la inteligencia artificial transformará nuestro futuro. ¡Estoy listo para sumar valor a tu equipo! ¡Hablemos y descubre cómo puedo contribuir a tu proyecto!",
    skills:
    {
        proficientWith: ['javascript', 'react', 'angular', 'java', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'
            , 'mysql', 'mongodb', 'postgresql', 'redes', 'cisco', 'linux', 'windows', 'docker', 'kubernetes', 'aws'
            , 'vmware'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator',]
    }
    ,
    hobbies: [
        {
            label: 'lectura',
            emoji: '📖'
        },
        {
            label: 'teatro',
            emoji: '🎭'
        },
        {
            label: 'peliculas',
            emoji: '🎥'
        },
        {
            label: 'cocinar',
            emoji: '🌶'
        },
        {
            label: 'dormir',
            emoji: '💤'
        },
        {
            label: 'nadar',
            emoji: '🏊‍♀️'
        },
        {
            label: 'profesor',
            emoji: '👨‍🏫'
        },
    ],
    portfolio: [
        {
            title: "API PRODUCTO JAVA",
            image: uno,
            live: "https://api-producto-mongo.onrender.com/swagger-ui/index.html",
            source: "https://github.com/Boxvi/api_producto_mongo",
            type: "BACKEND",

        },
        {
            title: "FRONT PRODUCTO REACTJS",
            image: dos,
            live: "https://front-producto-mongo.vercel.app/",
            source: "https://github.com/Boxvi/front-producto-mongo",
            type: "FRONTEND",
        },
        {
            title: "API PRODUCTO NESTJS",
            image: tres,
            live: "https://api-producto-nestjs.onrender.com/docs/v1",
            source: "https://github.com/Boxvi/api_producto_nestjs",
            type: "BACKEND",
        },
        {
            title: "FRONT TASK REACTJS",
            image: cuatro,
            live: "https://redux-react-crud-boxvi.vercel.app/",
            source: "https://github.com/Boxvi/redux-react-crud-boxvi",
            type: "FRONTEND",
        },
        {
            title: "PokeApi V1 ReactJS",
            image: cinco,
            live: "https://pokeapiboris.vercel.app/version_uno",
            source: "https://github.com/Boxvi/pokeapiboris",
            type: "FRONTEND",
        },
        {
            title: "PokeApi V2 ReactJS",
            image: seis,
            live: "https://pokeapiboris.vercel.app/version_dos/todos",
            source: "https://github.com/Boxvi/pokeapiboris",
            type: "FRONTEND",
        },
        {
            title: "YuGiOhWeb Angular",
            image: siete,
            live: "https://boxvi.github.io/yugihoweb/",
            source: "https://github.com/Boxvi/yugihoweb",
            type: "FRONTEND",
        },
        {
            title: "Gift App ReactJS",
            image: ocho,
            live: "https://gif-boxvi.vercel.app/",
            source: "https://github.com/Boxvi/gif-boxvi",
            type: "FRONTEND",
        },
        {
            title: "Flores Amarillas html-css-js",
            image: nueve,
            live: "https://flores-amarillas-cyan.vercel.app/",
            source: "https://github.com/Boxvi/flores-amarillas",
            type: "FRONTEND",
        },
        {
            title: "Flores Amarillas Genu ReactJS",
            image: diez,
            live: "https://flores-amarillas-genu.vercel.app/",
            source: "https://github.com/Boxvi/flores-amarillas-genu",
            type: "FRONTEND",
        },
        {
            title: "Disenos html-css",
            image: once,
            live: "https://boxvi.github.io/disenos.github.io/",
            source: "https://github.com/Boxvi/disenos.github.io",
            type: "FRONTEND",
        },
        {
            title: "Boxvi html-css-js",
            image: doce,
            live: "https://boxvi.github.io/arana_electrica/",
            source: "https://github.com/Boxvi/arana_electrica",
            type: "FRONTEND",
        },
        {
            title: "Portafolio version #1 ReactJS",
            image: trece,
            live: "https://50-projects-react.vercel.app/",
            source: "https://github.com/Boxvi/50-projects-react",
            type: "FRONTEND",
        },
        {
            title: "Portafolio version #2 ReactJS",
            image: trece,
            live: "https://boxvi.vercel.app",
            source: "https://github.com/Boxvi/boxvi",
            type: "FRONTEND",
        },
    ]
}
