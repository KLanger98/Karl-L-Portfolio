import {Flex, Image, Stack, Title, Text, Button, Grid, Container} from "@mantine/core"
import {IconCode, IconClick} from "@tabler/icons-react"

function Project(props) {
  return (
    <Grid style={{ width: "100%" }} mb={20}>
      {props.left ? (
        <Grid.Col span={6}>
          <Image src={props.imagePath} w={500} h="auto" m="auto" />
        </Grid.Col>
      ) : null}
      <Grid.Col span={6}>
        <Container
          p={18}
          m={20}
          radius="md"
          style={{ background: "#e9f5db", borderRadius: "20px" }}
        >
          <Stack m="auto" align="center" w="80%">
            <Flex w="100%" justify="space-between" style={{ maxWidth: "800px" }}>
              <Stack justify="flex-end" gap={0}>
                <Title order={2}>{props.projectTitle}</Title>
                <Title order={5}>{props.projectSubHeading}</Title>
              </Stack>
              <Image
                h={100}
                w="auto"
                mx="50px"
                mb="4px"
                src={props.iconPath}
                fit="contain"
              />
            </Flex>

            <Text>{props.projectDescription}</Text>

            <a
              href={props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              m="2px"
              style={{ width: "50%" }}
            >
              <Button
                variant="outline"
                color="#E2725B"
                rightSection={<IconClick size={18} />}
                style={{
                  width: "100%",
                }}
              >
                Live Deploy
              </Button>
            </a>

            <a
              href={props.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "50%" }}
            >
              <Button
                color="#E2725B"
                variant="default"
                rightSection={<IconCode size={18} />}
                style={{
                  width: "100%",
                  backgroundColor: "#E2725B",
                  color: "white",
                }}
              >
                The Code
              </Button>
            </a>
          </Stack>
        </Container>
      </Grid.Col>
      {!props.left ? (
        <Grid.Col span={6}>
          <Image src={props.imagePath} w={500} h="auto" m="auto" />
        </Grid.Col>
      ) : null}
    </Grid>
  );
}

export default Project;