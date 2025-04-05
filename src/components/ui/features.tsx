import {
  Card,
  Container,
  Flex,
  SimpleGrid,
  Spoiler,
  Text,
  Title,
  Anchor,
} from "@mantine/core";
import { featureStyles } from "./featureStyles";
import { TelescopeIcon, CrosshairIcon, GemIcon, ArrowDown, ArrowUp } from "lucide-react";

const mockdata = [
  {
    title: "Vision",
    description:
      "Our mission is to celebrate and preserve Ethiopia’s proud athletic heritage, from the historic Battle of Adwa victory to the iconic barefoot marathon triumphs of Abebe Bikila. We are dedicated to providing unwavering support to Ethiopian athletes, ensuring they have the resources, recognition,and opportunities they need to excel on the global stage.",
    icon: TelescopeIcon,
  },
  {
    title: "Mission",
    description:
      "We envision Ethiopia as a globally recognized powerhouse in athletics. We aim to foster a community founded on unity, strength, and cultural pride, supporting Ethiopian athletes inreaching the pinnacle of athletic excellence worldwide. Through Athletics we UNITE, CHALLENGE, INSPIRE and INNOVAT.",
    icon: CrosshairIcon,
  },
  {
    title: "Values",
    description:
      "We seek connections across disciplines and will continually work together to seek out new and creative ways to solve the issues and challenges that face the sports industry.Responsibility: We never forget our responsibility to care for athletes and improve their physical and emotional well-being.",
    icon: GemIcon,
  },
];

export function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card
      style={{
        borderLeftColor: "var(--mantine-color-primary-9)",
        borderLeftWidth: 5,
      }}
      withBorder
      key={feature.title}
      shadow="md"
      radius="sm"
      padding="xl"
    >
      <Flex gap={10} align="center">
        {feature.icon && <feature.icon size={20} />}
        <Text fz="lg" fw={500} style={featureStyles.cardTitle}>
          {feature.title}
        </Text>
      </Flex>
      <Spoiler
        maxHeight={100}
        showLabel={
          <Flex mt="sm" align="center" justify="flex-end" gap={5}>
            <Anchor size="xs" >
              more{" "}
            </Anchor>
            <ArrowDown size={10} />
          </Flex>
        }
        hideLabel={
          <Flex mt="sm" align="center" justify="flex-end" gap={5}>
            <Anchor size="xs" >
              less{" "}
            </Anchor>
            <ArrowUp size={10} />
          </Flex>
        }
      >
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Spoiler>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} style={featureStyles.title} ta="center" mt="sm">
        Who we are
      </Title>

      <Text c="dimmed" style={featureStyles.description} ta="center" mt="md">
        We celebrate Ethiopia’s athletic heritage and support its athletes in
        achieving global excellence. Through unity, innovation, and
        responsibility, we strive to uplift and inspire future generations.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
