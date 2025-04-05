import { Hero } from "../components/ui/hero";
import { LayoutShell } from "../components/layout/shell";
import { FeaturesCards } from "../components/ui/features";
import News from "../components/ui/news";
import Comments from "../components/ui/comments";

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <FeaturesCards />
      <News />
      <Comments />
    </LayoutShell>
  );
}
