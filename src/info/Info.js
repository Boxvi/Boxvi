import self from "../img/self.jpeg"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Boris",
    lastName: "Quizhpe",
    initials: "bq", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Ecuador'
        },
        {
            emoji: "💼",
            text: "Desarrollador de Software"
        },
        {
            emoji: "📧",
            text: "boxaquro@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://www.facebook.com/Bo.ris.xvii",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/Boxvi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/boris-quizhpe-a8636825b/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/_Boxvi_",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://wa.me/593996474990?text=Hola%20Boris,%20%C2%BFc%C3%B3mo%20te%20encuentras%20el%20d%C3%ADa%20de%20hoy?",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed

        {
            title: "1. PokeApi V1",
            live: "https://pokeapiboris.vercel.app/version_uno",
            source: "https://github.com/Boxvi/pokeapiboris",
            type: "FRONTEND",
        },
        {
            title: "2. PokeApi V2",
            live: "https://pokeapiboris.vercel.app/version_dos/todos",
            source: "https://github.com/Boxvi/pokeapiboris",
            type: "FRONTEND",
        },
        {
            title: "3. Flores Amarillas",
            live: "https://flores-amarillas-cyan.vercel.app/",
            source: "https://github.com/Boxvi/flores-amarillas",
            type: "FRONTEND",
        },
        {
            title: "4. Bitcoin Ecuador",
            live: "https://bitcoin-ecuador.vercel.app/dashboard/home",
            source: "https://github.com/Boxvi/pokeapiboris",
            type: "FRONTEND",
        },{
            title: "5. Gift App",
            live: "https://gif-boxvi.vercel.app/",
            source: "https://github.com/Boxvi/gif-boxvi",
            type: "FRONTEND",
        },
        {
            title: "6. PokeApi V2",
            live: "https://50-projects-react.vercel.app/",
            source: "https://github.com/Boxvi/50-projects-react",
            type: "FRONTEND",
        },
        {
            title: "7. API PRODUCTO",
            live: "https://api-producto-mongo.onrender.com/swagger-ui/index.html",
            source: "https://github.com/Boxvi/api_producto_mongo",
            type: "BACKEND",

        },
        {
            title: "8. FRONT PRODUCTO",
            live: "https://front-producto-mongo.vercel.app/",
            source: "https://github.com/Boxvi/front-producto-mongo",
            type: "FRONTEND",

        },
        {
            title: "10. Disenos",
            live: "https://boxvi.github.io/disenos.github.io/",
            source: "https://github.com/Boxvi/disenos.github.io",
            type: "FRONTEND",
        },
        {
            title: "11. Boxvi",
            live: "https://boxvi.github.io/BOXVI_SOFT/",
            source: "https://github.com/Boxvi/BOXVI_SOFT",
            type: "FRONTEND",
        },
        {
            title: "12. Boxvi",
            live: "https://boxvi.github.io/yugihoweb/",
            source: "https://github.com/Boxvi/yugihoweb",
            type: "FRONTEND",
        },




        // {
        //     title: "5. MVSC - Frontend",
        //     live: "https://mvsc.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/boxvi", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock1
        //
        // }
    ]
}
