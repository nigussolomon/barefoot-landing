import {
  Box,
  Button,
  Container,
  Flex,
  Overlay,
  Text,
  Title,
} from "@mantine/core";
import { heroStyles } from "./heroStyles";

export function Hero() {
  return (
    <Box style={heroStyles.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />
      <Overlay color="#000" opacity={0.7} zIndex={1} />

      <Box style={heroStyles.inner}>
        <Title style={heroStyles.title}>Welcome to BAREFOOT-ETHIOPIA</Title>

        <Container size={640}>
          <Text size="lg" style={heroStyles.description}>
            At BAREFOOT-ETHIOPIA, we celebrate and support Ethiopia’s rich
            heritage in athletics, honoring our historic victories and legendary
            athletes.
          </Text>
        </Container>

        <Flex gap="sm" style={heroStyles.controls}>
          <Button color="primary" size="xs">
            About Us
          </Button>
          <Button variant="white" size="xs">Contact Us</Button>
        </Flex>
      </Box>
    </Box>
  );
}
