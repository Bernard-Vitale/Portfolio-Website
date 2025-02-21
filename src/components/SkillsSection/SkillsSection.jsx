import React from "react"
import './SkillsSection.css';
import * as svg from '../../assets/svgs/svgs';

const skillsList = [
    {skill: "Javascript", image: svg.javascriptSVG},
    {skill: "React", image: svg.reactSVG},
    {skill: "Node.js", image: svg.nodeSVG},
    {skill: "Express.js", image: svg.expressSVG},
    {skill: "Redis", image: svg.redisSVG},
    {skill: "MongoDB", image: svg.mongoSVG},
    {skill: "jQuery", image: svg.jquerySVG},
    {skill: "Bootstrap", image: svg.bootSVG},
    {skill: "SQL", image: svg.sqlSVG},
    {skill: "HTML", image: svg.htmlSVG},
    {skill: "CSS", image: svg.cssSVG},
    {skill: "Python", image: svg.pythonSVG},
    {skill: "Java", image: svg.javaSVG},
    {skill: "C++", image: svg.cppSVG}
]


const SkillsSection = () => {
    return (
        <section className="skillsSectionContainer">
            <div className="skillsTitleContainer">
                <h1>My Skillset</h1>
            </div>
            <div className="skillsListContainer">
                {skillsList.map((item) => (
                    <div className="skillContainer" key={item.skill}>
                        {item.image}
                        <p>{item.skill}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
