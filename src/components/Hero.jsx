import { Button, Image, Flex, Title, Text, Group, Stack } from "@mantine/core";
import {IconArrowRight, IconFileDownload} from '@tabler/icons-react'
import resume_link from "../assets/Karl-Langer-Resume-2024.pdf";

function Hero() {
  return (
    <Flex justify="space-evenly" align="center" h={950}>
      <Image
        radius="md"
        h={600}
        m="20px"
        w="auto"
        fit="contain"
        src="src/assets/images/me.jpeg"
      />
      <Flex direction="column" w={600}>
        <Flex align="flex-end" justify="space-between">
          <Stack gap={0}>
            <Title order={1} m={0}>Hi,</Title>
            <Title order={2}>My Name Is Karl.</Title>
            <Title order={5}>(I'm on the right)</Title>
          </Stack>
          <Image 
          src="src/assets/Images/camera-and-pictures@4x.png"
          h={150} 
          fit='contain'
          w="auto"
          m={40}

          />
        </Flex>
        <Text size="md">
          I am an aspiring Full-Stack Developer looking to make the jump from my
          career as a Physiotherapist into the world of Web Development. I have
          been learning independently for the last two years and have
          accelerated the process by completeting the Adelaide University Web
          Development bootcamp in the last few months.{" "}
        </Text>
        <Button
          m="8px"
          variant="outline"
          color="#545A3E"
          rightSection={<IconArrowRight size={14} />}
          fullWidth
        >
          Check out my projects
        </Button>
        <Button
          m="8px"
          href={resume_link}
          variant="gradient"
          gradient={{ from: "#97A97C", to: "#718355", deg: 90 }}
          rightSection={<IconFileDownload size={18} />}
          fullWidth
        >
          Download my resume
        </Button>
      </Flex>
    </Flex>
  );
}

export default Hero;


