import {Flex, Title, Image, Stack, Divider} from '@mantine/core'

import ContactForm from './ContactForm';

function Contact(){
    return (
      <Stack align="center" style={{ background: "#B5C99A" }} p={20}>
        <Title>Let's Talk</Title>
        <Flex align="center" gap={40}>
          <Image
            h={300}
            fit="contain"
            src="src/assets/Images/Friend-talking@4x.png"
          />
          <ContactForm />
        </Flex>
      </Stack>
    );
}

export default Contact;