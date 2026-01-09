import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
      {/* Grid cyberpunk con toques vintage */}
      <div className="fixed inset-0 cyber-grid opacity-20"></div>
      <div className="fixed inset-0 cafe-neon-pattern opacity-15"></div>

      {/* Luces neón ambientales */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-neon-cyan/8 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-neon-orange/8 rounded-full blur-3xl animate-gentle-float delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-vintage-neon/6 rounded-full blur-3xl animate-gentle-float delay-6000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-neon-pink/6 rounded-full blur-3xl animate-gentle-float delay-9000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
