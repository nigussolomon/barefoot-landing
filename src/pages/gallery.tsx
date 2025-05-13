import {
  Flex,
  Title,
  Container,
  SegmentedControl,
  SimpleGrid,
  Image,
  Box,
  Overlay,
  Center,
  ActionIcon,
  Modal,
  Text,
} from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import { GalleryVertical } from "lucide-react";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function Gallery() {
  const [hoverState, setHoverState] = useState<number | null>();
  const [opened, { toggle }] = useDisclosure();

  const toggleHoverState = (index: number | null) => {
    setHoverState(index);
    return hoverState;
  };
  return (
    <LayoutShell>
      <Modal withCloseButton={false} size="xl" opened={opened} onClose={toggle}>
        <Image
          radius="sm"
          w="100%"
          h="85vh"
          fit="contain"
          src="https://barefootethiopia.org/uploads/blog-01.jpg"
        />
      </Modal>
      <Container size="xl" py="xs">
        <Title mt="md" ta="center">
          Explore our vast gallery...
        </Title>
        <Flex justify="center">
          <SegmentedControl
            my="sm"
            color="primary"
            size="xs"
            data={[
              {
                value: "all",
                label: (
                  <Text size="xs" px="sm">
                    All
                  </Text>
                ),
              },
              {
                value: "world_championship",
                label: (
                  <Text size="xs" px="xl">
                    WORLD CHAMPIONSHIP
                  </Text>
                ),
              },
              {
                value: "iaaf",
                label: (
                  <Text size="xs" px="xl">
                    IAAF
                  </Text>
                ),
              },
              {
                value: "olympics",
                label: (
                  <Text size="xs" px="xl">
                    OLYMPICS
                  </Text>
                ),
              },

              {
                value: "eam",
                label: (
                  <Text size="xs" px="xl">
                    ETHIOPIAN ATHLETICS
                  </Text>
                ),
              },
            ]}
          />
        </Flex>
        <SimpleGrid my="lg" cols={{ base: 1, md: 2, lg: 3 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <Box
              onMouseEnter={() => toggleHoverState(index)}
              onMouseLeave={() => toggleHoverState(null)}
              pos="relative"
            >
              <Overlay
                zIndex={0}
                color="#000"
                opacity={hoverState == index ? 0.7 : 0}
              >
                <Center h="100%">
                  <ActionIcon onClick={toggle} variant="default" size="xl">
                    <GalleryVertical size={20} />
                  </ActionIcon>
                </Center>
              </Overlay>
              <Image
                radius="sm"
                w="100%"
                fit="contain"
                src="https://barefootethiopia.org/uploads/blog-01.jpg"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </LayoutShell>
  );
}
