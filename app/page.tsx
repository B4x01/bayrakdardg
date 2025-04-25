import Hero from "@/components/home/hero"
import ServicesSection from "@/components/home/services-section"
import BusinessModel from "@/components/home/business-model"
import ProjectsPreview from "@/components/home/projects-preview"
import Testimonials from "@/components/home/testimonials"
import CTASection from "@/components/home/cta-section"
import FeaturesGrid from "@/components/shared/features-grid"

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dijital Çözümlerimiz</h2>
            <p className="text-muted-foreground text-lg">
              İşinizin ihtiyaçlarına uygun kapsamlı dijital çözümler sunuyoruz. İşte sizin için sunduğumuz bazı hizmetler.
            </p>
          </div>
          
          <FeaturesGrid />
        </div>
      </section>
      
      <ServicesSection />
      <BusinessModel />
      <ProjectsPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}