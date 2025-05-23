import { Hero } from "../components/ui/hero";
import { LayoutShell } from "../components/layout/shell";
import { FeaturesCards } from "../components/ui/features";
import News from "../components/ui/news";
import {
  Card,
  Flex,
  SimpleGrid,
  Text,
  Title,
  Container,
  Box,
} from "@mantine/core";
import {
  AwardIcon,
  Building,
  GiftIcon,
  Globe2Icon,
  HomeIcon,
  LifeBuoyIcon,
  MegaphoneIcon,
  Newspaper,
  Waypoints,
} from "lucide-react";
import { featureStyles } from "../components/ui/featureStyles";

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <FeaturesCards />
      <News />

      <Container py="xl" size="xl">
        <Title order={2} ta="center" mt="xl" mb="lg">
          Annual Main Programs
        </Title>
        <Text ta="center" mb="xl" c="dimmed" style={featureStyles.description}>
          Key Programs We Run
        </Text>
        <SimpleGrid spacing="xl" cols={{ base: 1, md: 3 }}>
          {[
            {
              icon: <GiftIcon />,
              name: "One Shoe for One Athlete Campaign",
              description:
                "A nationwide initiative that provides shoes and training gear to young athletes who train barefoot.",
            },
            {
              icon: <Waypoints />,
              name: "5km International Barefoot Running Competition",
              description:
                "An annual event celebrating Ethiopia’s athletic heritage and promoting global engagement.",
            },
            {
              icon: <LifeBuoyIcon />,
              name: "Support for Athletes in International Competitions",
              description:
                "Providing essential support for athletes participating in regional and international events.",
            },
            {
              icon: <MegaphoneIcon />,
              name: "Meet the Hero Forum",
              description:
                "Offering young athletes the chance to meet and learn from Ethiopian athletic legends.",
            },
            {
              icon: <AwardIcon />,
              name: "Athlete of the Year Award",
              description:
                "Annual recognition for the top athlete and Coach of the association.",
            },
            {
              icon: <Globe2Icon />,
              name: "Promoting Ethiopian Hero Athletes",
              description:
                "Showcasing Ethiopia’s most iconic athletes through multimedia campaigns.",
            },
            {
              icon: <Globe2Icon />,
              name: "Heritage Organizing Events",
              description:
                "Large-scale community events fostering unity among association members and the public, Like that of mass sport.",
            },
          ].map((item, index) => (
            <Card p="md" withBorder shadow="xs">
              <Flex gap={15} align="flex-start">
                <Box>{item.icon}</Box>
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

      <Container py="xl" size="xl">
        <Title order={2} ta="center" mt="xl" mb="lg">
          Long-Term Strategic Goals
        </Title>
        <Text ta="center" mb="xl" c="dimmed" style={featureStyles.description}>
          We have set ambitious goals to shape the future of Ethiopian athletics
        </Text>
        <SimpleGrid spacing="xl" cols={{ base: 1, md: 3 }}>
          {[
            {
              icon: <Building />,
              name: "Multi-Disciplinary Athletics Training and Research Center",
              description:
                "A state-of-the-art facility for elite training, sports science research, and athlete development, featuring: Specialized training programs, High-performance training grounds, Scholarships for talented athletes, A research hub for sports science.",
            },
            {
              icon: <Newspaper />,
              name: "National Athletics Hall of Fame / Museum",
              description:
                "A museum to celebrate Ethiopia’s athletic history, with exhibits, interactive displays, and digital archives",
            },
            {
              icon: <HomeIcon />,
              name: "Residency and Transition Center for Athletes",
              description:
                "A center providing accommodation, training, and career counseling for athletes transitioning to professional careers.",
            },
            {
              icon: <LifeBuoyIcon />,
              name: "Modern Sports Medicine Hospital",
              description:
                "A world-class medical and rehabilitation facility for athletes.",
            },
            {
              icon: <MegaphoneIcon />,
              name: "Athletics Media Platform",
              description:
                "A centralized media hub to promote Ethiopian athletes and cover events extensively.",
            },
          ].map((item, index) => (
            <Card p="md" withBorder shadow="xs">
              <Flex gap={15} align="flex-start">
                <Box>{item.icon}</Box>
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
    </LayoutShell>
  );
}
