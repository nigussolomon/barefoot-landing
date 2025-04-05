import { Carousel } from "@mantine/carousel";
import { Avatar, Card, Container, Group, Text, Title } from "@mantine/core";
import { featureStyles } from "./featureStyles";

export default function Comments() {
  return (
    <Container size="lg" py="xl">
      <Title mb="lg" order={2} ta="center">
        What do our memebrs say...
      </Title>
      <Text mb="xl" ta="center" c="dimmed" style={featureStyles.description}>
        Testimonials from our valued members, sharing their experiences and
        feedback. Their words reflect the quality and trust we've built, giving
        you insights into what makes our community special.
      </Text>

      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        align="start"
        withIndicators
        height={200}
        loop
      >
        {" "}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((opt) => (
          <Carousel.Slide>
            <Card withBorder shadow="md">
              <Group>
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <div>
                  <Text size="sm">Jacob Warnhalter</Text>
                  <Text size="xs" c="dimmed">
                    1{opt} minutes ago
                  </Text>
                </div>
              </Group>
              <Text pl={54} pt="sm" size="xs" c="dimmed">
                This Pokémon likes to lick its palms that are sweetened by being
                soaked in honey. Teddiursa concocts its own honey by blending
                fruits and pollen collected by Beedrill. Blastoise has water
                spouts that protrude from its shell. The water spouts are very
                accurate.
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}
