import {Title, Stack, Divider} from '@mantine/core'

import Project from './Projects/Project'

let projectsData = [
  {
    projectTitle: "As The Crow Flies",
    projectSubHeading: "Route Optimization Tool",
    projectDescription:
      "This group project was completed to solve an issue I have in my current work as a Home Care worker where I visit up to 7 homes in the same day. We created a user interface which could take up to 7 locations and return the fastest way to visit each location using a Route Optimization API from GraphHopper with google maps links allowing for easy navigation.",
    iconPath: "src/assets/Images/flag@4x.png",
    imagePath: "src/assets/Images/AsTheCrowFliesPCEDIT.png",
    liveLink: "https://klanger98.github.io/AsTheCrowDrives/",
    repoLink: "https://github.com/KLanger98/AsTheCrowDrives",
    left: true,
  },
  {
    projectTitle: "Gobble Global",
    projectSubHeading: "Favourite Snacks Sharing Platform",
    projectDescription:
      "Another group project where I took the lead position, the aim being to create a platform where users from around the world could come together to share their favorite snacks, review other snacks and create lists based on what they like or want to try. ",
    iconPath: "src/assets/Images/avocado@4x.png",
    imagePath: "src/assets/Images/GobbleGlobalLandingPC.png",
    liveLink: "https://thawing-peak-69496-59fa4b5ab176.herokuapp.com/",
    repoLink: "https://github.com/KLanger98/Gobble-Global-Snack-Finder",
    left: false,
  },
  {
    projectTitle: "CV Generator",
    projectSubHeading: "An early adventure into React",
    projectDescription:
      "My first full react application where I created a simple Resume Generator tool to assist with understanding the basics. You can add key resume details and they will be rendered onto the document view.",
    iconPath: "src/assets/Images/folder@4x.png",
    imagePath: "src/assets/Images/ResumeGeneratorPC.png",
    liveLink: "https://symphonious-croquembouche-22f73e.netlify.app",
    repoLink: "https://github.com/KLanger98/CV-Generator",
    left: true,
  },
];

function Projects(){

    return (
      <Stack style={{ background: "#B5C99A" }} align="center">
        <Stack gap={0} align="center">
          <Title m={20}>Projects I Have Built</Title>
          <Divider w="80%" size="lg" color="#CFE1B9" />
        </Stack>

        {projectsData.map((project) => (
          <Project
            project={project}
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectSubHeading={project.projectSubHeading}
            projectDescription={project.projectDescription}
            iconPath={project.iconPath}
            imagePath={project.imagePath}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            left={project.left}
          />
        ))}
      </Stack>
    );
}

export default Projects;