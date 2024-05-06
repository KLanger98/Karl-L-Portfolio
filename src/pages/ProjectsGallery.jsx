import Projects from "../components/Projects";
import {Group, Stack, Title, Divider, Text} from "@mantine/core"
import OtherProject from "../components/OtherProject";

const otherProjects = [
  {
    projectTitle: "Employee Management System",
    projectDescription: "A simple command line tracking system created with mySQL allowing for the viewing, adding, deleting and updating of departments, roles and employees.  ",
    projectLink: "https://github.com/KLanger98/Employee-tracker",
    projectImage: "/Images/EMSImage.png",
  },
  {
    projectTitle: "Technology Blog",
    projectDescription: "This project was completed to consolidate my understanding of the Model View Controller paradigm and how to construct a database using Sequelize as an Object Relational Model.",
    projectLink: "https://github.com/KLanger98/Technology-Blog",
    projectImage: "/Images/TechBlog.png",
  },
  {
    projectTitle: "PWA Text Editor",
    projectDescription: "An exercise to create a Progressive Web Application for a Text Editor created with Webpack and IndexedDB. An application which is installable and available offline with the help of service workers.",
    projectImage: "/Images/PWAScreen.png",
    projectLink: "https://github.com/KLanger98/PWA-Text-Editor",
  },
];

function ProjectsGallery(){
    return (
      <Stack>
        <Projects />
        <Stack align="center">
          <Stack align="center">
            <Title>Some Other Projects</Title>
            <Divider w="80%" size="lg" color="#CFE1B9" />
          </Stack>
          <Group p={40} justify="center" wrap="wrap" gap={40}>
            {otherProjects.map((project) => (
              <OtherProject
                key={project.projectTitle}
                projectTitle={project.projectTitle}
                projectLink={project.projectLink}
                projectImage={project.projectImage}
                projectDescription={project.projectDescription}
              />
            ))}
          </Group>
        </Stack>
      </Stack>
    );
}

export default ProjectsGallery;