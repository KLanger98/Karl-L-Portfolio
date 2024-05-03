import {Flex, Container} from "@mantine/core"

import {IconBrandInstagram, IconBrandLinkedin, IconBrandGithub} from "@tabler/icons-react"

function Footer(){
    return (
      <Flex justify="center" style={{ background: "#718355" }} p={40} gap={40}>
        <a>
          <IconBrandInstagram size={40} color="white" />
        </a>
        <a href="https://github.com/KLanger98">
          <IconBrandGithub size={40} color="white" />
        </a>
        <a href="http://www.linkedin.com/in/karl-langer-sd-pt">
          <IconBrandLinkedin size={40} color="white" />
        </a>
      </Flex>
    );
}

export default Footer;