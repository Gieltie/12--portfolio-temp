import { SiRedux, SiCss3, SiReact, SiHtml5, SiJavascript, SiNodedotjs, SiSass, SiGithub, SiNetlify, SiVercel } from "react-icons/si";
import Button from './Button'
import './index.scss'

export default function Skills() {
  return (
    <section className="my-skills" id="skills">
      <h2 className="my-skills__title">Skills</h2>
      <div className="my-skills__container">
        
        <div className="skill">
          <h3 className="skill__title">Back-end</h3>
            <ul className="skill__icons">
              <li><SiJavascript /> Javascript</li>
              <li><SiNodedotjs /> Node.JS</li>
            </ul>
        </div>

        <div className="skill">
          <h3 className="skill__title">Front-end</h3>
          <ul className="skill__icons">
            <li><SiHtml5 /> HTML5</li>
            <li><SiCss3 /> CSS3</li>
            <li><SiJavascript /> JavaScript</li>
            <li><SiSass /> Sass</li>
            <li><SiRedux /> Redux</li>
            <li><SiReact /> React</li>
          </ul>
        </div>
        
        
        <div className="skill">
          <h3 className="skill__title">Other stuff</h3>
          <ul className="skill__icons">
            <li><SiGithub /> Github</li>
            <li><SiNetlify /> Netlify</li>
            <li><SiVercel /> Vercel</li>
          </ul>
        </div>
      </div> 
      <Button />
    </section>
  )
}