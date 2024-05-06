import { Button, Image, Flex, Title, Text,  Stack, Divider, createTheme } from "@mantine/core";
import {IconArrowRight, IconFileDownload} from '@tabler/icons-react'
import { Link, useLocation } from "react-router-dom";
import ProjectsGallery from "../../pages/ProjectsGallery";

import classes from "./Hero.module.css"

const links = [
  { link: "/Projects", label: "Projects" },
];

function Hero() {

  const smallImgClass = `mantine-visible-from-sm mantine-hidden-from-md  ${classes.heroSmall}`;

  return (
    <Flex justify="space-evenly" align="center" h={850}>
      <Image
        className="mantine-visible-from-md"
        radius="md"
        h={600}
        m="20px"
        w="auto"
        fit="contain"
        src="/Images/me.jpeg"
      />
      <Flex direction="column" w={600} className="heroInfo" align="center">
        <Flex align="flex-end" justify="space-between" w="80%">
          <Stack gap={0} w="100%">
            <Flex w="100%" align="flex-end" justify="space-between">
              <Title order={1} m={0} w="100%">
                Hi,
              </Title>
              <Image
                style={{ height: "300px" }}
                className="mantine-hidden-from-sm"
                radius="md"
                m="20px"
                w="auto"
                src="/Images/me.jpeg"
              />
            </Flex>
            <Title order={3}>My Name Is Karl.</Title>
            <Title order={5}>(I'm on the right)</Title>
          </Stack>
          <Image
            style={{ height: "300px" }}
            className={smallImgClass}
            radius="md"
            m="20px"
            w="auto"
            src="Images/me.jpeg"
          />
          <Image
            src="/Images/camera-and-pictures@4x.png"
            className="mantine-visible-from-md"
            h={150}
            fit="contain"
            w="auto"
            m={40}
          />
        </Flex>
        <Divider w="80%" size="lg" color="#CFE1B9" my={8} />
        <Text size="md" w="80%">
          I am an aspiring Full-Stack Developer looking to make the jump from my
          career as a Physiotherapist into the world of Software Development. I
          have been learning independently for the last two years and have
          accelerated the process by completing the Adelaide University Web
          Development bootcamp in the last few months. I look forward to the day
          I can finally make this a career.
        </Text>
        <Link to="/Projects" style={{width: "100%"}} align="center">
          <Button
            component="a"
            href="/Projects"
            m="8px"
            variant="outline"
            color="#545A3E"
            w="80%"
            rightSection={<IconArrowRight size={14} />}
          >
            Checkout my Projects
          </Button>
        </Link>

        <Button
          component="a"
          href="/Karl-Langer-Resume-2024.pdf"
          m="8px"
          variant="gradient"
          gradient={{ from: "#97A97C", to: "#718355", deg: 90 }}
          rightSection={<IconFileDownload size={18} />}
          w="80%"
        >
          Download my resume
        </Button>
      </Flex>
    </Flex>
  );
}

export default Hero;


