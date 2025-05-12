import { cn } from "../utils/clsx";
import { Card, Box, Title, Text, Image, Badge, Group } from "@mantine/core"

interface IProjectCardProps {
  project_label: string;
  project_section: string;
  project_badges: Array<string>;
  image: string;
  project_new: boolean;
  project_link: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project_label, project_section, project_badges, image, project_new, project_link }) => {

  return (
    <Card padding="lg" radius="md" maw={400} bg="#f2f2f2" className={cn("transition-transform duration-300 hover:-translate-y-1", project_new && "border-0")}>
        <Card.Section p={8}>
            <a href={project_link} target="_blank">
              <Image src={image} h={200} alt="test"  radius="md" />
            </a>
            {project_new && (
              <div className="absolute top-5 right-5">
                <Badge color="#FFD100" size="md"> Neu! </Badge>
              </div>
            )}
        </Card.Section>

        <Box mt="sm">
            <Text c="dimmed" fw={500} ta="center" mb={2}>{project_section}</Text>
            <Title order={3} ta="center">{project_label}</Title>
        </Box>
        <Group mt="lg" gap="xs">
            {project_badges.map((badge, index) => (
              <Badge key={index} color="#181818" variant="light" h={18}>{badge}</Badge>
            ))}
        </Group>
    </Card>
  )
}

export default ProjectCard