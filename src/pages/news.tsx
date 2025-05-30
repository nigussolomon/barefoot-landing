import { TextInput, Container, Box, ScrollArea } from "@mantine/core";
import { LayoutShell } from "../components/layout/shell";
import { SearchIcon } from "lucide-react";
import News from "../components/ui/news";
import { useState } from "react";

export default function NewsPage() {
  const [search, setSearch] = useState("");
  return (
    <LayoutShell>
      <Container my="sm" size="xl">
        <Box mb="md">
          <TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            rightSection={<SearchIcon size={18} />}
            placeholder="Search for news..."
          />
        </Box>
        <ScrollArea mt="xs" h="70vh" type="never">
          <News search={search} alt />
        </ScrollArea>
      </Container>
    </LayoutShell>
  );
}
