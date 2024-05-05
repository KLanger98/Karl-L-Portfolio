import {Title, Group, Flex, Stack, Divider} from '@mantine/core'
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
      <Stack direction="column" align="center" my="auto" h={400} p={10}>
        <Stack align="center">
          <Title>Tech I Love To Use</Title>
          <Divider w="80%" size="lg" color="#CFE1B9" />
        </Stack>

        <Group my="auto" pb={80} justify="center">
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