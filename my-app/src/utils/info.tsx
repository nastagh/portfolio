
//pages id
export enum SectionButton {
    Home = 'Home',
    About = 'About',
    Projects = 'Projects',
    Contact = 'Contact'
}

export const ArraySectionButton = [
    SectionButton.Home,
    SectionButton.About,
    SectionButton.Projects,
    SectionButton.Contact
]

//skills
export enum Skills {
    Html = 'HTML',
    Css = 'CSS',
    JS = 'JS',
    TS = 'TS',
    React = 'React',
    Redux = 'Redux'
}

export const ArraySkills = [
    Skills.Css,
    Skills.Html,
    Skills.JS,
    Skills.TS,
    Skills.React,
    Skills.Redux
]

//contact
export type LinkType = {
    link: string,
    img: string,
    alt: string
}

const github: LinkType = {
    link: "https://github.com/nastagh?tab=repositories",
    img: `${process.env.PUBLIC_URL}/assets/github.svg`,
    alt: "github"
}

const linkedin: LinkType = {
    link: "https://www.linkedin.com/in/anastasiya-mikhailovskaya-75335425b/",
    img: `${process.env.PUBLIC_URL}/assets/linkedin.svg`,
    alt: "linkedin"
}

const email: LinkType = {
    link: "mailto:azhe8skaya.nastya@gmail.com",
    img: `${process.env.PUBLIC_URL}/assets/email.svg`,
    alt: "Email me"
}


export const ContactInfo: LinkType[] = [
    github,
    linkedin,
    email
]


//projects
export type ProjectType = {
    link: string,
    name: string,
    img: string,
    description: string
}

const jam_honey: ProjectType = {
    link: "https://nastagh.github.io/diplom_fe/",
    name: "Jam&Honey",
    img: `${process.env.PUBLIC_URL}/assets/bottle.png`,
    description: "A multi-page static site (5 pages) with a responsive layout and clean design, built using HTML, CSS, and JavaScript"
}

const arkanoid: ProjectType = {
    link: "https://nastagh.github.io/Mikhailovskaya_Anastasiaya/Arkanoid/index.html",
    name: "Arkanoid",
    img: `${process.env.PUBLIC_URL}/assets/arkanoid.png`,
    description: "A browser-based game built with JavaScript, utilizing Canvas for graphics, animations for smooth gameplay, DOM manipulation, and AJAX for dynamic data handling"
}

const plants: ProjectType = {
    link: "https://nastagh.github.io/Plants/",
    name: "Plants",
    img: `${process.env.PUBLIC_URL}/assets/plants.png`,
    description: "A single-page website with a responsive layout and clean design, built using HTML, CSS, and JavaScript"
}

const shelter: ProjectType = {
    link: "https://nastagh.github.io/Shelter/pages/main/index.html",
    name: "Shelter",
    img: `${process.env.PUBLIC_URL}/assets/shelter.png`,
    description: "A two-page responsive website built using HTML, CSS, and JavaScript, based on a finished design in Figma. Features include a popup modal, pagination, image slider, and a burger menu for mobile navigation"
}

const keyboard: ProjectType = {
    link: "https://nastagh.github.io/virtual_keyboard/dist/",
    name: "Virtual keyboard",
    img: `${process.env.PUBLIC_URL}/assets/keyboard.png`,
    description: "A virtual keyboard built with JavaScript. Supports mouse and physical key input, highlights pressed keys, and switches between two language layouts"
}

const online_store: ProjectType = {
    link: "https://nastagh.github.io/Online-store/",
    name: "Online store",
    img: `${process.env.PUBLIC_URL}/assets/store.png`,
    description: "A single-page online store built with JavaScript, featuring product search, filtering, sorting, and a fully functional shopping cart with add/remove options"
}

export const ArrayProject: ProjectType[] = [
    shelter, 
    plants, 
    jam_honey, 
    arkanoid, 
    online_store,
    keyboard
];