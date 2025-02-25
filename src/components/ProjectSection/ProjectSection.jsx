import {React, useState} from "react"
import './ProjectSection.css';
import MagnifyImage from "./MagnifyImage";

const projectList = [
    {
        name: 'Audio Ave',
        image: '/images/AudioAve.png',
        description: 'A companion app for Spotify users featuring AI-generated playlists, Spotify stats tracking, and a social playlist-sharing feed.',
        techStack: ['JavaScript', 'HTML', 'CSS', 'Handlebars', 'Node.js', 'Express.js', 'Git', 'Spotify API'],
        github: 'https://github.com/melissatmaca/cs546_Group4_Project'
    },
    {
        name: 'BiomechVIS',
        image: '/images/BiomechVIS.png',
        description: 'A data visualization tool for the Biomedical Engineering Lab at Stevens, supporting interactive 2D and 3D graph plotting from .mat files.',
        techStack: ['Python', 'Plotly', 'Dash', 'Bootstrap', 'CSS', 'Git'],
        github: 'https://github.com/jharring17/BiomechVIS',
    },
    {
        name: 'The Coffee Bean',
        image: '/images/CoffeeBean.png',
        description: 'A modern, responsive frontend for a mock online coffee store with advanced product filtering and a dynamic cart system.',
        techStack: ['React', 'Vite', 'HTML', 'CSS', 'Fake Coffee API'],
        github: 'https://github.com/Bernard-Vitale/The-Coffee-Bean',
        liveDemo: 'https://bernard-vitale.github.io/The-Coffee-Bean/'
    },
    {
        name: 'Space Adventures',
        image: '/images/SpaceAdventures.png',
        description: 'A 2D space survival video game where players dodge and destroy meteors and enemy starships with pixel-perfect collision detection.',
        techStack: ['Python', 'PyGame'],
        github: 'https://github.com/Bernard-Vitale/Space-Adventures',
    }
];

const ProjectSection = ({ref}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imagePath, setImagePath] = useState('');
    const [imageAlt, setImageAlt] = useState('');

    const handleImageClick = (path, alt) => {
        setImagePath(path);
        setImageAlt(alt);
        setIsOpen(true);
    };

    const handleImageClose = () => {
        setIsOpen(false);
    }

    return (
    <section ref={ref} className="projectSectionContainer subcontainer" >
        <h1 className="sectionHeading">Projects</h1>
        <div className="projectCardsContainer">
            {projectList.map((proj) => {
                return(
                    <div key={proj.name} className="projectCard">
                        <h2 className="projectName">{proj.name}</h2>
                        <img className="projectImage" src={proj.image} alt={`${proj.name} Image`} onClick={() => handleImageClick(proj.image, `${proj.name} Image`)} />
                        <div className="projectCardButtonContainer">
                            <a href={proj.github} target="_blank" ><img src="/images/Github-Logo.png" alt="Github Logo" className="githubLogo"/>Github</a>
                            {proj.liveDemo && <a href={proj.liveDemo} target="_blank">Demo<img src="/images/ExternalLink-Icon.png" alt="Externa Link Icon" className="externalLinkIcon"/></a>}
                        </div>
                        <p className="projectDescription" >{proj.description}</p>
                        <span className="techStackContainer">
                            {proj.techStack.map((tech) => {return ( <p key={`${tech}`}className="tech">{tech}</p>)})}
                        </span>
                    </div>
                )
            })}
            {isOpen && <MagnifyImage path={imagePath} alt={imageAlt} close={handleImageClose}/>}
        </div>
      
    </section>
  )
};

export default ProjectSection;
