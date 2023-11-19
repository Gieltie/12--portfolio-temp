import About from "../components/About";
import Intro from "../components/Intro";
import Services from "../components/Services";
//import Work from "../components/Work";
import './index.scss'

export default function HomePage() {
  return (
    <>
      <Intro />
      <Services />
      <About />
      {/* <Work /> */}
    </>
  )
}