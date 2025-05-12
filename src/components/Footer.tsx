import { Container, Group, Title, Anchor } from "@mantine/core"
import classes from "./Footer.module.css"
import { links } from "../utils/constants"

const Footer = () => {

    const items = links.map((item) => (
        <Anchor <"a">
        target="_blank"
        c="dimmed"
        key={item.label}
        href={item.link}
        size="sm"
        >
            {item.label}
        </Anchor>
    ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={3}> Kani Karadag </Title>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  )
}

export default Footer