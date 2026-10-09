import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WorkSection from "@/components/work-section"
import CraftSection from "@/components/craft-section"
import OriginSection from "@/components/origin-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <CraftSection />
        <OriginSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
