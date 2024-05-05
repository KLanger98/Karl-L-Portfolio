import classes from "./Contact.module.css";

import { Flex, Title, Image, Stack, Divider } from "@mantine/core";

import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <Stack align="center" style={{ background: "#B5C99A" }} p={20}>
      <Stack align="center">
        <Title>Let's Talk</Title>
        <Divider w="80%" size="lg" color="#CFE1B9" />
      </Stack>
      <Flex align="center" gap={40} className={classes['formContainer']}>
        <Image
          h={300}
          className="mantine-visible-from-lg"
          fit="contain"
          src="src/assets/Images/Friend-talking@4x.png"
        />
        <ContactForm bgcolor="#e9f5db" />
      </Flex>
    </Stack>
  );
}

export default Contact;
