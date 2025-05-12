import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './ui/dots';
import classes from './Banner.module.css';
import { motion } from 'framer-motion';
import logo from "../assets/pixelart-myself.png"

interface IBannerProps {
  scrollToProjects: () => void;
}

export function Banner({ scrollToProjects }: IBannerProps) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
      
      <motion.img
        src={logo}
        className={classes.logo}
        alt="Logo"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, delay: 0, ease: 'easeOut' }}
      >
        <Title className={classes.title}>
          Hey, mein Name{' '}
          <Text component="span" className={classes.highlight} inherit>
            ist
          </Text>{' '}
          Kani Karadag
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Ich bin Wirtschaftsinformatik-Student & angehender Softwareentwickler – viel Spaß beim Durchstöbern meines Portfolios!
          </Text>
        </Container>
      </motion.div>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray" onClick={() => console.log("Hast mich gefunden :)") }>
            Für Devs
          </Button>
          <Button className={classes.control} size="lg" color="#282828" onClick={scrollToProjects}>
            Projekte
          </Button>
        </div>
      </div>
      <Dots className={classes.dots} style={{ left: 120, bottom: 55 }} />
      <Dots className={classes.dots} style={{ right: 60, top: 260 }} />
    </Container>
  );
}