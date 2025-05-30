import {
  Box,
  SimpleGrid,
  Title,
  Container,
  Flex,
  Text,
  Image,
  Card,
  Accordion,
} from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import {
  DumbbellIcon,
  GiftIcon,
  Globe2Icon,
  LifeBuoyIcon,
  MegaphoneIcon,
  TrophyIcon,
} from "lucide-react";
import { featureStyles } from "../components/ui/featureStyles";

export default function About() {
  return (
    <LayoutShell>
      <Container size="xl">
        <Box id="who-we-are">
          <SimpleGrid h={600} spacing="xl" cols={{ base: 1, md: 2 }}>
            <Flex
              direction="column"
              gap={10}
              justify="center"
              align="flex-start"
            >
              <Title order={2} ta="left" mt="sm">
                About Us
              </Title>
              <Text c="primary" size="xs" mt={-18} fw={700}>
                WHO WE ARE
              </Text>
              <Text size="md" c="dimmed">
                {" "}
                BAREFOOT-ETHIOPIA was officially established on August 5, 2024,
                as a non-profit organization under Civil Society Organizations
                Proclamation No. 1113/2011, which regulates civil society
                organizations in Ethiopia. Supported by the Ethiopian Athletics
                Federation and the Ethiopian Ministry of Sport and Culture, we
                are committed to promoting and developing Ethiopian athletics
                both locally and internationally. Based in Addis Ababa, we
                envision expanding our operations regionally and globally to
                bolster Ethiopia’s legacy in athletics.
              </Text>
            </Flex>
            <Card py="xl" px={0}>
              <Card
                style={{
                  borderRightColor: "var(--mantine-color-primary-9)",
                  borderRightWidth: 9,
                  borderBottomColor: "var(--mantine-color-primary-9)",
                  borderBottomWidth: 9,
                }}
                withBorder
                shadow="md"
                radius="sm"
                padding={0}
              >
                <Image
                  src="https://myhabeshawi.wordpress.com/wp-content/uploads/2021/02/img_20210214_103222_803-1.jpg"
                  width="auto"
                />
              </Card>
            </Card>
          </SimpleGrid>
        </Box>
        <Box id="legality">
          <SimpleGrid h={600} spacing="xl" cols={{ base: 1, md: 2 }}>
            <Card py="xl" px={0}>
              <Card
                style={{
                  borderRightColor: "var(--mantine-color-primary-9)",
                  borderRightWidth: 9,
                  borderBottomColor: "var(--mantine-color-primary-9)",
                  borderBottomWidth: 9,
                }}
                withBorder
                shadow="md"
                radius="sm"
                padding={0}
              >
                <Image
                  src="https://assets.aws.worldathletics.org/large/60def9306356f3b115fd1577.jpg"
                  width="auto"
                />
              </Card>
            </Card>
            <Flex
              direction="column"
              w="100%"
              align="flex-start"
              justify="center"
            >
              <Title order={2} ta="left" mt="sm">
                Legality and Establishment
              </Title>
              <Text ta="left" mb="xl" c="dimmed">
                We are a legally established entity under Ethiopian law,
                committed to transparency, compliance, and ethical standards in
                supporting Ethiopian athletes.
              </Text>
              <Accordion mt="xl" variant="contained" w="100%">
                {[
                  {
                    title: "Legal Foundation",
                    content:
                      "We operate in accordance with the Civil Society Organizations Proclamation No. 1113/2011, which governs the establishment, registration, regulation, and oversight of civil society organizations (CSOs) in Ethiopia. This proclamation provides a comprehensive legal framework that ensures our organization maintains high standards of transparency, accountability, and ethical conduct in all areas of our work.",
                  },
                  {
                    title: "Government Support",
                    content:
                      "Our initiatives are proudly supported by both the Ethiopian Athletics Federation and the Ethiopian Ministry of Sport and Culture. These partnerships not only enhance our credibility but also provide a solid foundation for fostering meaningful collaboration at both national and international levels.",
                  },
                  {
                    title: "Our Mission",
                    content:
                      "We are committed to promoting and developing Ethiopian athletics at all levels—locally and internationally—by empowering athletes, supporting grassroots programs, and enhancing athletic infrastructure.",
                  },
                  {
                    title: "Our Vision",
                    content:
                      "To see Ethiopian athletics is globally celebrated, well-developed, and promoted at a world-class level.",
                  },
                ].map((item) => (
                  <Accordion.Item value={item.title}>
                    <Accordion.Control>{item.title}</Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm">{item.content}</Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Flex>
          </SimpleGrid>
        </Box>
        <Box h={550} my="xl" id="objectives">
          <Title order={2} ta="center" mt="xl" mb="lg">
            Our Objectives
          </Title>
          <Text
            ta="center"
            mb="xl"
            c="dimmed"
            style={featureStyles.description}
          >
            We are dedicated to promoting the achievements of Ethiopian
            athletes, celebrating their victories, and providing comprehensive
            support. Through international promotion, community-building events,
            and global partnerships, we aim to enhance their success and elevate
            Ethiopia's presence in the world of sports.
          </Text>
          <SimpleGrid spacing="xl" cols={{ base: 1, md: 3 }}>
            {[
              {
                icon: <TrophyIcon />,
                name: "Promote Athletes' Achievements and Document Stories",
                description:
                  "Showcase and ensure the global recognition of the remarkable achievements of Ethiopian athletes through various media channels.",
              },
              {
                icon: <GiftIcon />,
                name: "Celebrate Ethiopian Athletic Victories",
                description:
                  "Highlight historic milestones, especially those of barefoot athletes, in the global sporting community.",
              },
              {
                icon: <LifeBuoyIcon />,
                name: "Provide Comprehensive Support to Athletes",
                description:
                  "Connect athletes with training and competition opportunities. Offer financial, logistical, and moral support to ensure they have the necessary resources to succeed.",
              },
              {
                icon: <MegaphoneIcon />,
                name: "Promote Ethiopian Athletics Internationally",
                description:
                  "Support athletes in regional, national, and international competitions while enhancing Ethiopia’s global reputation in athletics.",
              },
              {
                icon: <DumbbellIcon />,
                name: "Strengthen Unity and Community Spirit",
                description:
                  "Organize events that promote solidarity within the association and the wider public, including mass sporting activities.",
              },
              {
                icon: <Globe2Icon />,
                name: "Foster International Cooperation",
                description:
                  "Build partnerships with global athletic organizations to further develop Ethiopian athletics.",
              },
            ].map((item, index) => (
              <Card p="md" withBorder shadow="xs">
                <Flex gap={15} align="flex-start">
                  <Box>{item.icon}</Box>
                  <Flex key={index} direction="column" gap="sm">
                    <Title order={5}>{item.name}</Title>
                    <Text size="sm" mt={-10} c="dimmed">
                      {item.description}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </LayoutShell>
  );
}
