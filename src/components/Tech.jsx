import {Title, Group, Flex, Stack} from '@mantine/core'
import {
    IconHtml,
    IconBrandCss3,
    IconBrandReact,
    IconBrandJavascript,
    IconBrandMysql,
    IconBrandMongodb,
    IconBrandNodejs

} from "@tabler/icons-react"

const technolgoies = [
  {
    name: "HTML",
    iconName: IconHtml,
  },
  {
    name: "CSS",
    iconName: IconBrandCss3,
  },
  {
    name: "Javascript",
    iconName: IconBrandJavascript,
  },
  {
    name: "React",
    iconName: IconBrandReact,
  },
  {
    name: "mySQL",
    iconName: IconBrandMysql,
  },
  {
    name: "MongoDB",
    iconName: IconBrandMongodb,
  },
  {
    name: "Node",
    iconName: IconBrandNodejs,
  },
];

function Tech(){
    return (
      <Stack
        // style={{ background: "#B5C99A" }}
        direction="column"
        align="center"
        my="auto"
        h={400}
        p={10}
      >
        <Title>Tech I Love To Use</Title>
        <Group>
          {technolgoies.map((technology) => {
            let IconComponent = technology.iconName;
            return (
              <Stack align="center" key={technology.name}>
                <IconComponent size={48} stroke={1.25} />
                <Title order={4}> {`${technology.name}`} </Title>
              </Stack>
            );
          })}
        </Group>
      </Stack>
    );
}

export default Tech;