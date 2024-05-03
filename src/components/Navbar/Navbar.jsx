import { useState } from "react";
import { Container, Group, Burger, Image, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const links = [
  { link: "/about", label: "Home" },
  { link: "/pricing", label: "Projects" },
  { link: "/learn", label: "Contact" },
  { link: "/community", label: "Community" },
];

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header} style={{ background: "#B5C99A"}}>
      <Flex
      w="100%"
      justify="space-between">
      <Image h={25} my="auto" mx="50px" src="src/assets/Images/glasses@4x.png" />
      <Container size="md" className={classes.inner} style={{marginRight: "40px"}}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
      </Flex>
    </header>
  );
}

export default Navbar;