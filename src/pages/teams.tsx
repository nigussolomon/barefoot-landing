import { Card, Container, SimpleGrid, Image, Title, Text } from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import { featureStyles } from "../components/ui/featureStyles";
import Guy from "../assets/guyjpg.jpg";
import Temesgen from "../assets/temesgen.jpg";
import Ath from "../assets/athlete.jpg";

export default function Teams() {
  return (
    <LayoutShell>
      <Container size="xl">
        <Title order={2} ta="center" mt="xl" mb="lg">
          Our Leadership Team
        </Title>
        <Text ta="center" mb="xl" c="dimmed" style={featureStyles.description}>
          BAREFOOT-ETHIOPIA operates under a structured governance framework,
          including a General Assembly, a Board of Directors, and an executive
          leadership team. Together, we provide strategic direction and
          oversight to ensure the association’s success in its mission and
          objectives.
        </Text>
        <SimpleGrid mb="xl" mt="md" cols={{ base: 1, md: 3 }}>
          <Card>
            <Card.Section>
              <Image radius="sm" w="100%" h="45vh" fit="contain" src={Ath} />
            </Card.Section>
            <Card.Section mt="sm" inheritPadding>
              <Title ta="center" order={4}>
                Executive Director
              </Title>
              <Title ta="center" order={4}>
                Athlete Wegayehu Girma
              </Title>
              <Text ta="center">wegayehugirma@barefootethiopia.org</Text>
              <Text ta="center">+251911537173</Text>
            </Card.Section>
          </Card>

          <Card>
            <Card.Section>
              <Image
                radius="sm"
                w="100%"
                h="45vh"
                fit="contain"
                src={Temesgen}
              />
            </Card.Section>
            <Card.Section mt="sm" inheritPadding>
              <Title ta="center" order={4}>
                Deputy Director & Head of Strategic Affairs
              </Title>
              <Title ta="center" order={4}>
                Ato Temesgen Bekele (MBA)
              </Title>
              <Text ta="center">
                temesgenbekele@barefootethiopia.org / temeyebekele@gmail.com
              </Text>
              <Text ta="center">+251911384902</Text>
            </Card.Section>
          </Card>

          <Card>
            <Card.Section>
              <Image radius="sm" w="100%" h="45vh" fit="contain" src={Guy} />
            </Card.Section>
            <Card.Section mt="sm" inheritPadding>
              <Title ta="center" order={4}>
                Membership and Sport activities Coordinator
              </Title>
              <Title ta="center" order={4}>
                Ato Demis Girma
              </Title>
              <Text ta="center">demisgirma@barefootethiopia.org</Text>
              <Text ta="center">+251980159298</Text>
            </Card.Section>
          </Card>
        </SimpleGrid>
      </Container>
    </LayoutShell>
  );
}
