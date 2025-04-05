import {
  Box,
  SimpleGrid,
  Title,
  Container,
  Flex,
  Text,
  Image,
  Card,
  Button,
  Accordion,
} from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import {
  DumbbellIcon,
  GalleryVerticalEnd,
  GiftIcon,
  Globe2Icon,
  LifeBuoyIcon,
  MegaphoneIcon,
  PhoneCallIcon,
  TrophyIcon,
} from "lucide-react";

export default function About() {
  return (
    <LayoutShell>
      <Container size="xl">
        <Box id="who-we-are">
          <SimpleGrid spacing="xl" cols={{ base: 1, md: 2 }}>
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
                Federation and the Ethiopian Ministry of Foreign Affairs, we are
                committed to promoting and developing Ethiopian athletics both
                locally and internationally. Based in Addis Ababa, we envision
                expanding our operations regionally and globally to bolster
                Ethiopia’s legacy in athletics.
              </Text>
              <Flex mt="md" gap="xs">
                <Button size="xs" rightSection={<PhoneCallIcon size={12} />}>
                  Contact Us
                </Button>
                <Button
                  size="xs"
                  rightSection={<GalleryVerticalEnd size={12} />}
                  variant="outline"
                >
                  Gallery
                </Button>
              </Flex>
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
                  src="https://barefootethiopia.org/uploads/about_04.jpg"
                  width="auto"
                />
              </Card>
            </Card>
          </SimpleGrid>
        </Box>
        <Box id="legality">
          <SimpleGrid spacing="xl" cols={{ base: 1, md: 2 }}>
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
                  src="https://barefootethiopia.org/uploads/blog-02.jpg"
                  width="auto"
                />
              </Card>
            </Card>
            <Flex direction="column" w="100%" align="flex-start" justify="center">
              <Title order={2} ta="left" mt="sm">
                Legality and Establishment
              </Title>
              <Accordion variant="contained" w="100%">
                {[
                  {
                    title: "Legal Foundation",
                    content:
                      "We operate under Civil Society Organizations Proclamation No. 1113/2011, which regulates civil society organizations in Ethiopia. This provides us with a clear legal framework for transparency and accountability.",
                  },
                  {
                    title: "Government Support",
                    content:
                      "Our initiatives are supported by the Ethiopian Athletics Federation and the Ethiopian Ministry of Foreign Affairs, giving us credibility and a strong foundation for national and international collaboration.",
                  },
                  {
                    title: "Our Mission",
                    content:
                      "We are committed to promoting and developing Ethiopian athletics at all levels—locally and internationally—by empowering athletes, supporting grassroots programs, and enhancing athletic infrastructure.",
                  },
                  {
                    title: "Our Vision",
                    content:
                      "Based in Addis Ababa, our long-term vision is to expand regionally and globally, further elevating Ethiopia’s historic legacy in athletics and establishing the country as a global leader in the sport.",
                  },
                ].map((item) => (
                  <Accordion.Item value={item.title}>
                    <Accordion.Control>{item.title}</Accordion.Control>
                    <Accordion.Panel>
                      <Text size="xs" c="dimmed">
                        {item.content}
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Flex>
          </SimpleGrid>
        </Box>
        <Box my="xl" id="objectives">
          <Title order={2} ta="center" mt="xl" mb="lg">
            Our Objectives
          </Title>
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
              <Card withBorder shadow="xs">
                <Flex gap={15} align="flex-start">
                  <Box>{item.icon}</Box>
                  <Flex key={index} direction="column" gap="sm">
                    <Title order={5}>{item.name}</Title>
                    <Text size="xs" mt={-10} c="dimmed">
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
