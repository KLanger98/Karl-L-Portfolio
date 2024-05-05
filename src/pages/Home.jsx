import { Stack } from "@mantine/core";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects";
import Tech from "../components/Tech";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <Stack gap={0}>
      <Hero />
      <Projects />
      <Tech />
      <Contact />
    </Stack>
  );
}

export default Home;
