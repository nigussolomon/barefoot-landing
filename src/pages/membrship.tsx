import {
  Card,
  Container,
  SimpleGrid,
  Title,
  Text,
  Flex,
  Image,
  Stack,
  Center,
} from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import { featureStyles } from "../components/ui/featureStyles";
import { Building, HomeIcon, LifeBuoyIcon, Newspaper } from "lucide-react";
import SAC from "../assets/New Folder/sport and culture.png";
import MCT from "../assets/New Folder/Ministry_of_Culture_and_Tourism.png";
import EAF from "../assets/New Folder/Ethiopian-Athletics-Federation.png";
import EOC from "../assets/New Folder/Ethiopian_Olympic_Committee_logo.png";
import MFA from "../assets/New Folder/MFA_Ethiopia_Logo.png";
import IAF from "../assets/New Folder/iaaf-logo-png_seeklogo-307255.png";

export default function Membership() {
  return (
    <LayoutShell>
      <Container size="xl">
        <SimpleGrid mt="lg" spacing="xl" cols={{ base: 1, md: 4 }}>
          {[
            {
              icon: <Building />,
              name: "Membership",
              description:
                "Join BAREFOOT-ETHIOPIA and actively support Ethiopian athletics.",
            },
            {
              icon: <Newspaper />,
              name: "Donations",
              description:
                "Contribute to campaigns that provide essential resources to athletes.",
            },
            {
              icon: <HomeIcon />,
              name: "Volunteering",
              description:
                "Offer your time and expertise to assist with programs and events.",
            },
            {
              icon: <LifeBuoyIcon />,
              name: "Partnerships",
              description:
                "Collaborate with us to create lasting impacts in the world of athletics.",
            },
          ].map((item, index) => (
            <Card p="md" withBorder shadow="xs">
              <Flex gap={15} align="flex-start">
                <Flex key={index} direction="column" gap="sm">
                  <Title order={4}>{item.name}</Title>
                  <Text size="sm" mt={-10} c="dimmed">
                    {item.description}
                  </Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
      <Container size="xl">
        <Title order={2} ta="center" mt="xl" mb="lg">
          For inquiries, please contact us:
        </Title>
        <Text ta="center" c="dimmed" style={featureStyles.description}>
          +251 911 537 173 / +251 911 384 902
        </Text>
        <Text ta="center" mb="xl" c="dimmed" style={featureStyles.description}>
          info@barefootethiopia.org
        </Text>
      </Container>
      <Container mb="xl" size="xl">
        <Title order={2} ta="center" mt="xl" mb="lg">
          Benefits of Membership
        </Title>
        <Text ta="center" mb="xl" c="dimmed" style={featureStyles.description}>
          As a member of BAREFOOT-ETHIOPIA, you’ll have the chance to contribute
          to the growth of athletics in Ethiopia and enjoy the following
          benefits
        </Text>
        <SimpleGrid spacing="xl" cols={{ base: 1, md: 3 }}>
          {[
            {
              icon: <Building />,
              name: "Opportunities for Participation",
              description:
                "Engage in events such as sports activities, barefoot running competitions, conferences, and fundraisers.",
            },
            {
              icon: <Newspaper />,
              name: "International Travel Opportunities",
              description:
                "Attend international competitions and support Ethiopian athletes.",
            },
            {
              icon: <HomeIcon />,
              name: "Meet the Heroes Program",
              description:
                "Meet celebrated athletes and participate in discussions and collaborations.",
            },
            {
              icon: <LifeBuoyIcon />,
              name: "Access to Support Letters",
              description:
                "Receive official letters for educational, job, and competitive purposes.",
            },
            {
              icon: <LifeBuoyIcon />,
              name: "Athletic Gear Support",
              description:
                "Access training shoes and athletic gear for athletes in need.",
            },
          ].map((item, index) => (
            <Card p="md" withBorder shadow="xs">
              <Flex gap={15} align="flex-start">
                <Flex key={index} direction="column" gap="sm">
                  <Title order={4}>{item.name}</Title>
                  <Text size="sm" mt={-10} c="dimmed">
                    {item.description}
                  </Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
      <Container mb="xl" size="xl">
        <Title order={2} ta="center" mt="xl" mb="lg">
          Our Partners
        </Title>
        <Text ta="center" mb="xl" c="dimmed" style={featureStyles.description}>
          We collaborate with numerous esteemed organizations to further our
          mission and promote Ethiopian athletics globally
        </Text>
        <Center>
          <SimpleGrid spacing="xl" cols={{ base: 1, md: 3 }}>
            {[SAC, MCT, EAF, EOC, MFA, IAF].map((val, index) => (
              <Stack key={index}>
                <Image src={val} h={200} w={200} />
              </Stack>
            ))}
          </SimpleGrid>
        </Center>
      </Container>
    </LayoutShell>
  );
}
