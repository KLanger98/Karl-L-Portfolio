import {Stack, Title, TextInput, Textarea, Container, Button, Flex, Image, Text} from "@mantine/core"
import {useState} from 'react'
import {IconAt} from "@tabler/icons-react"

import { validateEmail } from "../../utils/helpers";


function ContactForm(props){
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
      const {name, value} = e.target;

      if(name === 'contactName'){
        return setContactName(value)
      } else if (name === 'email'){
        return setEmail(value)
      } else{
        setMessage(value)
      }
      
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }

      alert('Sorry this feature is currently unavailable, please find my email address in the footer');
      setContactName('');
      setEmail('');
      setMessage('');
    }
    return (
      <Container
        p={20}
        w="90%"
        m={40}
        style={{ background: `${props.bgcolor}`, borderRadius: "20px" }}
      >
        <Stack>
          <Flex align="flex-end" justify="space-between">
            <Stack align="center">
              <Image
                w={100}
                h="auto"
                className="mantine-hidden-from-sm"
                fit="contain"
                src="/Images/Friend-talking@4x.png"
              />
              <Title order={3}>Send Me A Message</Title>
            </Stack>
            <Image
              w={100}
              h="auto"
              className="mantine-visible-from-sm mantine-hidden-from-lg"
              fit="contain"
              src="Images/Friend-talking@4x.png"
            />
          </Flex>
          <form className="form" onSubmit={handleFormSubmit}>
            <TextInput
              name="contactName"
              value={contactName}
              onChange={handleInputChange}
              label="Your Name"
            />
            <TextInput
              name="email"
              value={email}
              onChange={handleInputChange}
              leftSectionPointerEvents="none"
              leftSection={<IconAt size={18} />}
              label="Your email"
            />
            <Textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              label="Message"
              placeholder="Hey Karl, Kindest Regards, You."
            />
            <Button
              mt={10}
              type="submit"
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
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </form>
        </Stack>
      </Container>
    );
}

export default ContactForm;