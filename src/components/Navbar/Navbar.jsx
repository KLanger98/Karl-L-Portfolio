import { useState } from "react";
import { Container, Group, Burger, Image, Flex, Title, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const links = [
  { link: "/", label: "Home" },
  { link: "/Projects", label: "Projects" },
  { link: "/Contact", label: "Contact" },
];

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const currentPage = useLocation().pathname;

  const items = links.map((link) => (
    <a
      key={link.label}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      <Link
        style={{textDecoration: "none", color: "black"}}
        to={link.link}
        className={currentPage === `${link.link}` ? "nav-link active" : "nav-link"}
      >
        {link.label}
      </Link>
    </a>
  ));

  return (
    <header className={classes.header} style={{ background: "#B5C99A" }}>
      <Flex w="100%" justify="center">
        <Stack align="center">
          <Flex align="center" ml={80} gap={16}>
            <Title>KL</Title>
            <Image h={25} my="auto" src="/Images/glasses@4x.png" />
          </Flex>
          <Flex>
            <Group gap={5} hiddenFrom="xs">
              {items}
            </Group>
          </Flex>
        </Stack>

        <Container
          size="md"
          visibleFrom="xs"
          className={classes.inner}
          style={{ marginRight: "40px" }}
        >
          <Group gap={5}>{items}</Group>
        </Container>
      </Flex>
    </header>
  );
}

export default Navbar;