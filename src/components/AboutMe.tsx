import { Tabs, Text } from "@mantine/core"

const AboutMe = () => {
  return (
    <>
        <Tabs defaultValue="Skills" className="w-" color="dark">
            <Tabs.List>
                <Tabs.Tab
                value="Skills"
                leftSection={<i className="bx bxl-typescript" style={{ fontSize: 16 }}/>}
                >
                    Skills
                </Tabs.Tab>
                <Tabs.Tab
                value="Ausbildung"
                leftSection={<i className='bx bxs-briefcase-alt-2'></i>}
                >
                    Ausbildung
                </Tabs.Tab>
                <Tabs.Tab
                value="Interessen"
                leftSection={<i className='bx bxs-wine'></i>}
                >
                    Interessen
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Skills" mt={15}>
                <Text fw={700} mb={4}>Programmiersprachen</Text>
                <Text mb={15}>TypeScript | JavaScript | C# | Java</Text>

                <Text fw={700} mb={4}>Frameworks & Libraries</Text>
                <Text mb={15}>React | Tailwind | Electron | Mantine | Shadcn/ui | Bootstrap</Text>

                <Text fw={700} mb={4}>Backend</Text>
                <Text>Microsoft SQL Server | MongoDB | Appwrite</Text>
            </Tabs.Panel>
            <Tabs.Panel value="Ausbildung" mt={15}>
                <Text><Text component="span" fw={700} mr={5}>2022 - 202X</Text> Fachhochschule Dortmund (Bachelor) </Text>
                <Text><Text component="span" fw={700} mr={5}>2020 - 2022</Text> Willy Brandt-Gesamtschule (Abitur) </Text>
                <Text><Text component="span" fw={700} mr={5}>2015 - 2020</Text> Realschule Oberaden </Text> 
            </Tabs.Panel>
            <Tabs.Panel value="Interessen" mt={15}>
                <Text>Nebenbei habe ich auch ein relativ großes Interesse am E-Commerce, was sich zusätzlich in meinem früheren Gewerbe in diesem Bereich widerspiegelte. Außerdem mag ich Sprachen sehr und würde in Zukunft gerne noch mehr lernen.</Text>
            </Tabs.Panel>
        </Tabs>
    </>
  )
}

export default AboutMe