'use client'
import PageHero from "@components/PageHero"
import Container from "@components/Container"
import ProjectGallery from "@components/ProjectGallery"
import SectionTitle from "@components/SectionTitle"
import { motion } from "framer-motion"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "civil", label: "Civil Works" },
]

const projectStats = [
  { label: "Completed Projects", value: "250+" },
  { label: "Square Meters Built", value: "2.5M+" },
  { label: "Active Clients", value: "100+" },
  { label: "Team Members", value: "150+" },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero 
        title="Our Projects" 
        subtitle="A portfolio of excellence spanning residential, commercial, and civil works across Zimbabwe."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" 
      />

      {/* Project Gallery */}
      <section className="py-20 md:py-24">
        <Container>
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  cat.id === "all"
                    ? "bg-brand-accent text-brand-primary shadow-elevate"
                    : "border border-brand-primary text-brand-primary hover:bg-brand-primary/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Gallery */}
          <ProjectGallery />
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="By The Numbers" 
            subtitle="Our commitment to excellence, proven through results." 
          />
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {projectStats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-xl glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-extrabold text-brand-accent mb-2">{stat.value}</div>
                <div className="text-brand-muted font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle 
            title="Featured Highlights" 
            subtitle="Recent projects that showcase our expertise and innovation." 
          />
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Harare Tech Hub",
                category: "Commercial",
                desc: "State-of-the-art office and co-working space in central Harare. 15,000 m² across 8 floors with smart building systems.",
                stats: "2023 • 150+ workers • $8.5M"
              },
              {
                title: "Riverside Residential",
                category: "Residential",
                desc: "Mixed-use development with 200 units ranging from studios to 4-bedroom homes. Complete with amenities and green space.",
                stats: "2023 • 200 units • $12M"
              },
              {
                title: "Harare Ring Road Extension",
                category: "Civil Works",
                desc: "Major infrastructure project: 45 km highway expansion with bridges, drainage, and modern safety features.",
                stats: "2022-2023 • 45 km • $25M"
              },
              {
                title: "Norton Industrial Complex",
                category: "Industrial",
                desc: "Manufacturing facility with loading bays, warehouse, and office space. Designed for heavy-duty operations.",
                stats: "2022 • 30,000 m² • $6M"
              }
            ].map((proj, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl glass space-y-4 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold mb-2">
                      {proj.category}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">{proj.title}</h3>
                  </div>
                </div>
                <p className="text-brand-muted leading-relaxed">{proj.desc}</p>
                <div className="text-sm text-brand-muted/70 pt-4 border-t border-white/50">{proj.stats}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="hero-text text-white">Your Project Could Be Next</h2>
            <p className="subtext text-white/90">
              Join the list of satisfied clients who trusted us with their vision. Let's create something amazing together.
            </p>
            <a href="/contact" className="inline-flex btn-primary bg-brand-accent text-brand-primary">
              Request a Consultation
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
