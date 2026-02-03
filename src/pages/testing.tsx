import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { RatingBadge } from "@site/src/components/ui/foundations/rating-badge";
import { QRCode } from "@site/src/components/ui/shared-assets/qr-code";
import { SocialProofFullWidth } from "@site/src/components/SocialProofFullWidth";
import { GooglePlayButton, GooglePlayWhiteButton, AppStoreButton, GalaxyStoreButton, AppGalleryButton } from "../components/ui/base/buttons/app-store-buttons";

export default function Testing() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Testing Page - ${siteConfig.title}`}
      description="Welcome to the testing page of CodeHarborHub."
    >
      <main className="m-4">
        <h1 className="text-4xl font-bold text-center my-20">
            This is a testing page for CodeHarborHub.
        </h1>

        <RatingBadge rating={5} title="Best Design Tool" subtitle="2,000+ reviews" />

        <QRCode value="upi://pay?pn=CodeHarborHub&mode=01&pa=gpay-11253238941@okbizaxis" size="lg" />

        <SocialProofFullWidth />
        
        <div className="flex flex-col items-start gap-3 md:flex-row">
            <GooglePlayButton size="md" />
            <GooglePlayButton size="lg" />
            <GooglePlayWhiteButton size="md" />
            <AppStoreButton size="md" />
            <GalaxyStoreButton size="md" />
            <AppGalleryButton size="md" />            
        </div>
      </main>
    </Layout>
  );
}