import {
  AppShell,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Menu,
  Image,
  Stack,
  Text,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/image.png";
import {
  ArrowRight,
  DotIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneCallIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scrollToHash } from "../../utils/scroll";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const path = window.location.pathname + window.location.hash;

  const menu = [
    { name: "Home", path: "/", active: path === "/" },

    {
      name: "About Us",
      path: "/about",
      active: path === "/about",
      sub: [
        {
          name: "Who We Are",
          path: "/about/#who-we-are",
          active: path === "/about/#who-we-are",
        },
        {
          name: "Establishment & Legality",
          path: "/about/#legality",
          active: path === "/about/#legality",
        },
        {
          name: "Objectives",
          path: "/about/#objectives",
          active: path === "/about/#objectives",
        },
      ],
    },

    {
      name: "Gallery",
      path: "/gallery",
      active: path === "/gallery",
    },

    {
      name: "News",
      path: "/news",
      active: path === "/news",
    },

    {
      name: "Our Team",
      path: "/teams",
      active: path === "/teams",
    },

    {
      name: "Membership",
      path: "/membership",
      active: path === "/membership",
      sub: [
        {
          name: "Membership Benefits",
          path: "/membership/benefits",
          active: path === "/membership/benefits",
        },
        {
          name: "Join Us",
          path: "/membership/join",
          active: path === "/membership/join",
        },
      ],
    },
  ];

  return (
    <AppShell
      transitionDuration={500}
      transitionTimingFunction="ease"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding={0}
    >
      <AppShell.Header>
        <Container h="100%" size="xl">
          <Group h="100%">
            <Group justify="space-between" style={{ flex: 1 }}>
              <Flex h="100%" align="center" gap="xs">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Image radius="md" h={40} w="auto" fit="contain" src={Logo} />
              </Flex>
              <Group ml="xl" gap={"xs"} visibleFrom="sm">
                {menu.map((item, index) => (
                  <Menu
                    width={200}
                    key={index}
                    position="bottom-start"
                    trigger="click-hover"
                    shadow="md"
                    withArrow
                  >
                    <Menu.Target>
                      <Button
                        size="xs"
                        color={
                          item.active ||
                          path.split("/")[1] == item.path.split("/")[1]
                            ? "primary"
                            : "dark"
                        }
                        variant={
                          item.active ||
                          path.split("/")[1] == item.path.split("/")[1]
                            ? "light"
                            : "subtle"
                        }
                        key={index}
                        onClick={() =>
                          item.sub
                            ? handleNavigation(item.sub[0]?.path)
                            : handleNavigation(item.path)
                        }
                      >
                        <Text size="xs" fw={500}>
                          {item.name}
                        </Text>
                      </Button>
                    </Menu.Target>
                    {item.sub && (
                      <Menu.Dropdown>
                        {item.sub?.map((subItem, subIndex) => (
                          <Menu.Item
                            style={{
                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                                transition: "background-color 150ms ease",
                              },
                            }}
                            rightSection={
                              subItem.active ? (
                                <DotIcon size={22} />
                              ) : (
                                <ArrowRight size={12} />
                              )
                            }
                            onClick={() => scrollToHash(navigate, subItem.path)}
                            key={subIndex}
                          >
                            {subItem.name}
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    )}
                  </Menu>
                ))}
              </Group>
              <Button
                leftSection={<PhoneCallIcon size={12} />}
                size="xs"
                color="primary"
                variant="filled"
                onClick={() => handleNavigation("/contact")}
              >
                <Text size="xs" fw={500}>
                  Contact Us
                </Text>
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {menu.map((item, index) => (
          <Button
            fullWidth
            variant={item.active ? "filled" : "subtle"}
            justify="space-between"
            rightSection={">"}
            key={index}
            onClick={() => {
              handleNavigation(item.path);
              toggle();
            }}
          >
            {item.name}
          </Button>
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Flex
          w="100%"
          direction="column"
          style={{ minHeight: "calc(100vh - 60px)" }}
          justify="space-between"
        >
          <Box flex={1}>{children}</Box>
          <Box bg="dark">
            <Container px="md" size="xl">
              <Flex gap="xl" py="md" justify="space-between" align="center">
                <Flex
                  direction="column"
                  h={105}
                  align="flex-start"
                  justify="space-between"
                >
                  <Image radius="md" h={70} w="auto" fit="contain" src={Logo} />
                  <Text size="xs" c="dimmed">
                    All Rights Reserved. © {new Date().getFullYear()}{" "}
                    BAREFOOT-ETHIOPIA
                  </Text>
                </Flex>
                <Stack maw={200} gap={10}>
                  <Text size="xs" c="white" fw={900}>
                    Follow Us
                  </Text>
                  <Text size="xs" c="dimmed">
                    Stay connected with BAREFOOT-ETHIOPIA on social media to
                    engage with our community and receive updates on our
                    programs
                  </Text>
                  <Flex w="100%" gap="sm" justify="flex-start">
                    <InstagramIcon color="white" size={18} />
                    <FacebookIcon color="white" size={18} />
                    <TwitterIcon color="white" size={18} />
                    <YoutubeIcon color="white" size={20} />
                  </Flex>
                </Stack>
              </Flex>
            </Container>
          </Box>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
