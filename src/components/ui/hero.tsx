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
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <Box style={heroStyles.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />
      <Overlay color="#000" opacity={0.7} zIndex={1} />

      <Box style={heroStyles.inner}>
        <Title style={heroStyles.title}>Welcome to BAREFOOT-ETHIOPIA</Title>

        <Container size={640}>
          <Text size="lg" style={heroStyles.description}>
            Join Us in Promoting and Strengthening Ethiopian Athletics.
          </Text>
        </Container>

        <Flex gap="sm" style={heroStyles.controls}>
          <Button
            radius="md"
            onClick={() => navigate("/about")}
            color="primary"
            size="sm"
          >
            About Us
          </Button>
          <Button
            onClick={() => navigate("/membership")}
            radius="md"
            variant="white"
            size="sm"
          >
            Membership
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
