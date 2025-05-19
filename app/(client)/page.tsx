import Container from "@/components/Container";
import HomeBanner from "@/components/new/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <Container className="py-10">
      <HomeBanner />
      <ProductGrid />
      <SpeedInsights/>
    </Container>
    
  );
}
