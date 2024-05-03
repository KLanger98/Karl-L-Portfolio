import {Stack, Title, TextInput, Textarea, Container, Button} from "@mantine/core"
import {IconAt} from "@tabler/icons-react"

function ContactForm(){
    return (
      <Container
        p={20}
        w={500}
        m={40}
        style={{ background: "#e9f5db", borderRadius: "20px" }}
      >
        <Stack>
            <Title order={3}>Send Me A Message</Title>
          <TextInput label="Your Name" placeholder="Mr Burns" />
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={<IconAt size={18} />}
            label="Your email"
            placeholder="Your email"
          />
          <Textarea label="Message" placeholder="Hey Karl, Have a nice day mate" />
          <Button
            color="#E2725B"
            variant="default"
            style={{
              width: "100%",
              backgroundColor: "#E2725B",
              color: "white",
            }}
          >
            Send Message
          </Button>
        </Stack>
      </Container>
    );
}

export default ContactForm;