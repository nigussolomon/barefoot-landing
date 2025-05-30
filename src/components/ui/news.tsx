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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function News({
  alt,
  search = "", // Default to empty string if no search provided
}: {
  alt?: boolean;
  search?: string;
}) {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(loading, error);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = !alt
          ? await fetch(
              'https://wwajpp6o.api.sanity.io/v2025-05-30/data/query/production?query=*[_type == "post"] | order(_createdAt desc)[0...3]{_id,title,"body": body[0].children[0].text,"image": image.asset->url}&perspective=published',
            )
          : await fetch(
              "https://wwajpp6o.api.sanity.io/v2025-05-30/data/query/production?query=*%5B_type+%3D%3D+%27post%27%5D%7B%0A++_id%2C%0A++title%2C%0A++%27body%27%3A+body%5B0%5D.children%5B0%5D.text%2C%0A++%27image%27%3A+image.asset-%3Eurl%0A%7D&perspective=published",
            );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data.result); // Store the posts in state
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on the search string (case-insensitive)
  const filteredPosts = posts.filter((val: any) => {
    const searchLower = search.toLowerCase();
    const titleMatch = val.title?.toLowerCase().includes(searchLower) || false;
    const bodyMatch = val.body?.toLowerCase().includes(searchLower) || false;
    return titleMatch || bodyMatch;
  });

  return (
    <Container size={alt ? "xl" : "lg"} py={alt ? 0 : "xl"}>
      {!alt && (
        <Flex align="center" justify="space-between">
          <Title order={2} ta="left" mt="sm">
            Featured News
          </Title>
          <Anchor onClick={() => navigate("/news")} size="xs">
            more
          </Anchor>
        </Flex>
      )}

      <SimpleGrid mt={alt ? 0 : "lg"} cols={{ base: 1, md: 3 }} spacing="xl">
        {filteredPosts.map((val: any, index: any) => (
          <Card key={index} shadow="md" withBorder>
            <CardSection>
              <Image w="100%" fit="contain" src={val.image} />
            </CardSection>
            <CardSection withBorder inheritPadding>
              <Title mt="md" order={5}>
                {val.title}
              </Title>
              <Text mb="md" size="xs" c="dimmed" mt="md">
                {val.body}
              </Text>
            </CardSection>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
