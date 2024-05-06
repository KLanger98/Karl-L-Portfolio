import ContactForm from "../components/ContactForm/ContactForm";
import { Stack, Title, Image, Flex, Divider } from "@mantine/core";

function ContactPage() {
  return (
    <Stack align="center" w="100%">
      <Stack align="center" mt={50}>
        <Title>Want To Reach Out?</Title>
        <Divider w="80%" size="lg" color="#CFE1B9" />
      </Stack>

      <Flex align="center" mt={20} w="70%">
        <ContactForm bgcolor="#CFE1B9" />
        <Image
          mt={20}
          h="auto"
          w={100}
          visibleFrom="lg"
          src="/Images/person-sending-a-message@4x.png"
        />
      </Flex>
    </Stack>
  );
}

export default ContactPage;
