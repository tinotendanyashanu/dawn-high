'use client'
import Container from "@components/Container"
import Hero from "@components/Hero"
import SectionTitle from "@components/SectionTitle"
import FeatureCards from "@components/FeatureCards"
import ProjectGallery from "@components/ProjectGallery"
import StatsStrip from "@components/StatsStrip"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trusted Across Zimbabwe Section */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="Trusted Across Zimbabwe" 
            subtitle="Civil, residential, and commercial projects delivered with precision and excellence." 
          />
          <div className="mt-12">
            <StatsStrip />
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle 
            title="What We Do" 
            subtitle="Four pillars of excellence that drive every project to success." 
          />
          <div className="mt-16">
            <FeatureCards />
          </div>
        </Container>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-brand-light via-white to-white">
        <Container>
          <SectionTitle 
            title="Featured Work" 
            subtitle="A showcase of recent builds and successful project deliveries." 
          />
          <div className="mt-16">
            <ProjectGallery />
          </div>
          <div className="mt-12 text-center">
            <a 
              href="/projects" 
              className="inline-flex items-center gap-2 btn-primary"
            >
              View All Projects <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="hero-text text-white">Ready to Build Your Vision?</h2>
            <p className="subtext text-white/90">
              Let's discuss your next project. Contact our team to explore solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/contact" className="btn-primary bg-brand-accent text-brand-primary hover:brightness-95">
                Get In Touch
              </a>
              <a href="/services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
