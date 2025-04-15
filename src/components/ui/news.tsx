import {
  Anchor,
  Card,
  CardSection,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

export default function News({ alt }: { alt?: boolean }) {
  const images = ["https://barefootethiopia.org/uploads/blog-01.jpg"];
  const sampleList = alt ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3];
  return (
    <Container size={alt ? "xl" : "lg"} py={alt ? 0 : "xl"}>
      {!alt && (
        <Flex align="center" justify="space-between">
          <Title order={2} ta="left" mt="sm">
            Featured News
          </Title>
          <Anchor size="xs">more</Anchor>
        </Flex>
      )}

      <SimpleGrid mt={alt ? 0 : "lg"} cols={{ base: 1, md: 3 }} spacing="xl">
        {sampleList.map(() => (
          <Card shadow="md" withBorder>
            <CardSection>
              <Image w="100%" fit="contain" src={images[0]} />
            </CardSection>
            <CardSection withBorder inheritPadding>
              <Title mt="md" order={5}>
                Hailu and Crestan impress as meeting records fall in Ostrava
              </Title>
              <Text mb="md" size="xs" c="dimmed" mt="md">
                World indoor 1500m champion Freweyni Hailu might only have been
                racing the third 3000m of her career but she achieved one of the
                fastest performances of all time at the Czech Indoor Gala – this
                season’s fourth World Athletics Indoor Tour Gold meeting – in
                Ostrava on Tuesday.
              </Text>
              <Flex mb="md" justify="flex-end">
                <Anchor size="xs">Read More</Anchor>
              </Flex>
            </CardSection>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
