import About from "../../components/About";
import Intro from "../../components/Intro";
import Skills from "../../components/Skills";
import Work from "../../components/Works";

function HomePage() {
  return (
    <>
      <Intro />
      <Skills />
      <About />
      <Work />
    </>
  )
}

export { HomePage }