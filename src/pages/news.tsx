import { TextInput, Container, Tabs, Box, ScrollArea } from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import { GroupIcon, Megaphone, SearchIcon, Target } from "lucide-react";
import News from "../components/ui/news";
import { useMediaQuery } from "@mantine/hooks";

export default function NewsPage() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  return (
    <LayoutShell>
      <Container my="sm" size="xl">
        <Box mb="md">
          <TextInput
            rightSection={<SearchIcon size={18} />}
            placeholder="Search for news..."
          />
        </Box>
        <Tabs
          mt="xs"
          variant="pills"
          orientation={isMobile ? "horizontal" : "vertical"}
          defaultValue="asp"
        >
          <Tabs.List>
            <Tabs.Tab value="asp" leftSection={<Target size={15} />}>
              Athlete Spotlights
            </Tabs.Tab>
            <Tabs.Tab value="ec" leftSection={<Megaphone size={15} />}>
              Event Coverage
            </Tabs.Tab>
            <Tabs.Tab value="cs" leftSection={<GroupIcon size={12} />}>
              Community Stories
            </Tabs.Tab>
          </Tabs.List>

          <ScrollArea mt="xs" h="70vh" type="never">
            <Tabs.Panel px="sm" value="asp">
              <News alt />
            </Tabs.Panel>
            <Tabs.Panel px="sm" value="ec">
              <News alt />
            </Tabs.Panel>
            <Tabs.Panel px="sm" value="cs">
              <News alt />
            </Tabs.Panel>
          </ScrollArea>
        </Tabs>
      </Container>
    </LayoutShell>
  );
}
