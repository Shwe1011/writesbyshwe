import PortfolioNav from "@/components/PortfolioNav";
import PortfolioHero from "@/components/PortfolioHero";
import ProductDocsSection from "@/components/ProductDocsSection";
import DeveloperDocsSection from "@/components/DeveloperDocsSection";
import ContentMarketingSection from "@/components/ContentMarketingSection";
import SEOGeoSection from "@/components/SEOGeoSection";
import VideosSection from "@/components/VideosSection";
import MicrocopyToolSection from "@/components/MicrocopyToolSection";
import CopyWiseSection from "@/components/CopyWiseSection";
import RAGBotSection from "@/components/RAGBotSection";
import PortfolioFooter from "@/components/PortfolioFooter";

export default function Home() {
  return (
    <>
      <PortfolioNav />
      <main>
        <PortfolioHero />
        <ProductDocsSection />
        <DeveloperDocsSection />
        <ContentMarketingSection />
        <SEOGeoSection />
        <VideosSection />
        <MicrocopyToolSection />
        <CopyWiseSection />
        <RAGBotSection />
      </main>
      <PortfolioFooter />
    </>
  );
}
