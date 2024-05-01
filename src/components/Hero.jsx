import { Button, Image, Flex, Title, Text } from "@mantine/core";
import {IconArrowRight, IconFileDownload} from '@tabler/icons-react'

function Hero() {
  return (
    <Flex 
    justify="space-evenly"
    align="center"
    h={1000}>
      <Image
        radius="md"
        h={600}
        m="20px"
        w="auto"
        fit="contain"
        src="src/assets/me.jpeg"
      />
      <Flex direction="column">
        <Title size="h1">Hi, My Name Is Karl.</Title>
        <Title size="h3">That is me on the right.</Title>
        <Text size="md">I am a fullstack engineer</Text>
        <Button
          m="8px"
          variant="outline"
          color="#545A3E"
          rightSection={<IconArrowRight size={14} />}
        >
          Check out my projects
        </Button>
        <Button
          m="8px"
          variant="gradient"
          gradient={{ from: "#97A97C", to: "#718355", deg: 90 }}
          rightSection={<IconFileDownload size={18} />}
        >
          Download my resume
        </Button>
      </Flex>
    </Flex>
  );
}

export default Hero;


