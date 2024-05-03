import {Title, Stack} from '@mantine/core'

import Project from './Project'

let projectsData = [
  {
    projectTitle: "As The Crow Flies",
    projectSubHeading: "Route Optimization Tool",
    projectDescription:
      "This group project was completed to solve an issue I have in my current work as a Home Care worker where I visit up to 7 homes in the same day. We created a user interface which could take up to 7 locations and return the fastest way to visit each location using a Route Optimization API from GraphHopper",
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
      "This group project was completed to solve an issue I have in my current work as a Home Care worker where I visit up to 7 homes in the same day. We created a user interface which could take up to 7 locations and return the fastest way to visit each location using a Route Optimization API from GraphHopper",
    iconPath: "src/assets/Images/avocado@4x.png",
    imagePath: "src/assets/Images/GobbleGlobalLandingPC.png",
    left: false,
  },
  {
    projectTitle: "CV Generator",
    projectSubHeading: "An early adventure into React",
    projectDescription:
      "This group project was completed to solve an issue I have in my current work as a Home Care worker where I visit up to 7 homes in the same day. We created a user interface which could take up to 7 locations and return the fastest way to visit each location using a Route Optimization API from GraphHopper",
    iconPath: "src/assets/Images/folder@4x.png",
    imagePath: "src/assets/Images/ResumeGeneratorPC.png",
    left: true,
  },
];

function Projects(){

    return (
      <Stack  style={{ background: "#B5C99A" }} align="center">
        <Title m={20}>Projects I Have Built</Title>
        <Title></Title>
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