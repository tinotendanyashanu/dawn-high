'use client'
import PageHero from "@components/PageHero"
import Container from "@components/Container"
import SectionTitle from "@components/SectionTitle"
import { motion } from "framer-motion"
import { Building2, ClipboardCheck, Factory, Truck, Shield, TrendingUp, Users, Award } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Construction Services",
    description: "From foundations to finishing touches. We deliver complete construction solutions for residential, commercial, and industrial projects with uncompromising standards.",
    features: ["Residential Development", "Commercial Buildings", "Industrial Facilities", "Civil Works", "Renovations"]
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Expert oversight from concept to completion. Our PMO team ensures transparent communication, rigorous quality control, and on-time delivery.",
    features: ["Master Planning", "Budget Management", "Quality Assurance", "Safety Protocols", "Timeline Tracking"]
  },
  {
    icon: Factory,
    title: "Brick Manufacturing",
    description: "Consistent quality bricks for large-scale projects. Our modern kiln operates 24/7 to meet Zimbabwe's growing construction demand.",
    features: ["Standard Bricks", "Engineered Bricks", "Custom Sizes", "Quality Certified", "Bulk Supply"]
  },
  {
    icon: Truck,
    title: "Equipment & Vehicle Hire",
    description: "Well-maintained heavy machinery and vehicles. Expert operators available. Ready for rapid deployment on any project site.",
    features: ["Excavators (CAT 320)", "Dozers (D6+)", "Graders", "Dump Trucks", "Crane Services"]
  }
]

const values = [
  { icon: Shield, label: "Safety First", description: "Zero tolerance for safety incidents. Every team member trained and certified." },
  { icon: TrendingUp, label: "Quality Excellence", description: "ISO certified processes. Continuous improvement in every project phase." },
  { icon: Users, label: "Team Expertise", description: "150+ skilled engineers, technicians, and operators with 15+ years avg. experience." },
  { icon: Award, label: "Track Record", description: "250+ projects delivered on time, on budget, to spec. 98% client satisfaction." }
]

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive construction solutions backed by expertise, innovation, and unwavering commitment to excellence."
        image="https://images.unsplash.com/photo-1559074902-b8a0b7e37b3e?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Main Services */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={idx}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-brand-accent/20 flex-shrink-0">
                      <Icon className="text-brand-accent" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brand-primary mb-2">{service.title}</h3>
                      <p className="text-brand-muted mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-brand-primary/70">
                            <span className="w-2 h-2 rounded-full bg-brand-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="Why Choose Dawn?" 
            subtitle="We're not just builders—we're partners in your vision." 
          />
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl glass text-center space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-lg bg-brand-accent/20">
                      <Icon className="text-brand-accent" size={32} />
                    </div>
                  </div>
                  <h4 className="font-bold text-brand-primary">{value.label}</h4>
                  <p className="text-sm text-brand-muted">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle 
            title="Our Process" 
            subtitle="A proven methodology for successful project delivery." 
          />
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your vision and requirements in detail." },
              { step: "02", title: "Planning", desc: "Create comprehensive project plans and timelines." },
              { step: "03", title: "Execution", desc: "Build with precision and quality at every stage." },
              { step: "04", title: "Handover", desc: "Final inspections and seamless project handover." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-extrabold text-brand-accent/30">{item.step}</div>
                <h3 className="text-xl font-bold text-brand-primary">{item.title}</h3>
                <p className="text-brand-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="hero-text text-white">Let's Build Together</h2>
            <p className="subtext text-white/90">
              Your project deserves excellence. Contact us to discuss how we can bring your vision to life.
            </p>
            <a href="/contact" className="inline-flex btn-primary bg-brand-accent text-brand-primary">
              Start Your Project
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
