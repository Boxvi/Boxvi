import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
        {
            link: "https://www.facebook.com/Bo.ris.xvii",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Boxvi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com",
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed

        {
            title: "1. PokeApi V1 - Frontend",
            live: "https://pokeapiboris.vercel.app/version_uno",
            source: "https://github.com/Boxvi/pokeapiboris",
            image: mock3
        },
        {
            title: "2. PokeApi V2 - Frontend",
            live: "https://pokeapiboris.vercel.app/version_dos/todos",
            source: "https://github.com/Boxvi/pokeapiboris",
            image: mock4

        },
        {
            title: "3. API PRODUCTO - Backend",
            live: "https://api-producto-mongo.onrender.com/swagger-ui/index.html",
            source: "https://github.com/Boxvi/api_producto_mongo",
            image: mock2

        },
        {
            title: "4. FRONT PRODUCTO - Frontend",
            live: "https://front-producto-mongo.vercel.app/",
            source: "https://github.com/Boxvi/front-producto-mongo",
            image: mock5

        },
        {
            title: "5. MVSC - Frontend",
            live: "https://mvsc.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/boxvi", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock1
        //
        // }
    ]
}
