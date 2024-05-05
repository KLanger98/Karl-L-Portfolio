import {Card, Image, Text, Group, Button, Stack} from "@mantine/core"
import {IconCode} from "@tabler/icons-react"

function OtherProject(props){
    return (
      <Card w="25rem" style={{ background: "#B5C99A" }}>
        <Card.Section>
          <Image h={300} src={props.projectImage} />
        </Card.Section>
        <Stack justify="space-between">
          <Text mt={20} fw={800}>{props.projectTitle}</Text>
          <Text h={120}>{props.projectDescription}</Text>
          <Button
            color="#E2725B"
            variant="default"
            component="a"
            href={props.projectLink}
            rightSection={<IconCode size={18} />}
            style={{
              width: "100%",
              backgroundColor: "#E2725B",
              color: "white",
            }}
            radius="md"
          >
            Repository
          </Button>
        </Stack>
      </Card>
    );
}

export default OtherProject;