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
  const [galType, setGalType] = useState<string>("eam");
  const [opened, { toggle }] = useDisclosure();

  const galleries = {
    eam: [
      "https://ethiopianbusinessreview.net/wp-content/uploads/2023/11/atletes-e1699555197254.png",
      "https://assets.aws.worldathletics.org/large/377d04ee-96b4-4a43-ae46-9ad3a3740310.jpg",
      "https://www.ethiosports.com/wp-content/uploads/2016/03/G-Dibaba.jpg",
      "https://ethiopianmonitor.com/wp-content/uploads/2023/05/ethiopian-athlettes-in-lusaka-1.jpg",
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/HRV6GDRNN5PSNLLXPIPDS44LH4.jpg",
      "https://ethionegari.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-17-at-10.13.04-AM.jpeg",
      "https://www.ethiosports.com/wp-content/uploads/2016/03/Yomif.jpg",
    ],
    world_championship: [
      "https://media.aws.iaaf.org/championships/world-athletics-u20-championships.jpg",
      "https://static.independent.co.uk/2022/07/18/05/6f8af7652cc8b9930312c94ccc64229dY29udGVudHNlYXJjaGFwaSwxNjU4MjAxODA3-2.67937413.jpg",
      "https://media.aws.iaaf.org/championships/world-athletics-race-walking-team-championshi.jpg",
      "https://assets.aws.worldathletics.org/large/68318562377bc0dbb214b19e.jpg",
    ],
  };

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
            value={galType}
            onChange={(e) => setGalType(e)}
            my="sm"
            color="primary"
            size="xs"
            data={[
              {
                value: "eam",
                label: (
                  <Text size="xs" px="xl">
                    ETHIOPIAN ATHLETICS
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
            ]}
          />
        </Flex>
        <SimpleGrid my="lg" cols={{ base: 1, md: 2, lg: 3 }}>
          {galleries[galType as keyof typeof galleries].map((val, index) => (
            <Box
              onMouseEnter={() => toggleHoverState(index)}
              onMouseLeave={() => toggleHoverState(null)}
              pos="relative"
              key={index}
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
              <Image radius="sm" w="100%" fit="contain" src={val} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </LayoutShell>
  );
}
