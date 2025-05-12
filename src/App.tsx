import { useRef } from "react"

import { Box, Title } from "@mantine/core"
import AboutMe from "./components/AboutMe"
import { Banner } from "./components/Banner"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {

  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
        <Banner scrollToProjects={() => {
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }} />
        <Box maw={500} mx="auto">
          <Box mt={110} mb={100}>
            <Title order={1} mb={30} ta="center"> Über mich </Title>
            <AboutMe />
          </Box>
        </Box>
        <Box ref={projectsRef} maw={1000} mx="auto" mt={190} mb={100}>
          <Title order={1} mb={30} ta="center"> Projekte </Title>
          <Projects />
        </Box>
        <Box maw={1000} mx="auto" mt={190} mb={50}>
          <Footer />
        </Box>
    </>
  )
}

export default App
