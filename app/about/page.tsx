'use client'
import PageHero from "@components/PageHero"
import Container from "@components/Container"
import SectionTitle from "@components/SectionTitle"
import { motion } from "framer-motion"
import { Target, Heart, Zap, Shield, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue perfection in every project, detail, and interaction." },
  { icon: Heart, title: "Integrity", desc: "Honest communication, reliable delivery, and ethical practices always." },
  { icon: Zap, title: "Innovation", desc: "Embracing modern techniques and technology for better outcomes." },
  { icon: Shield, title: "Safety", desc: "Zero harm commitment with rigorous HSE protocols and training." },
  { icon: Users, title: "Community", desc: "Building not just structures, but lasting value for communities." },
  { icon: TrendingUp, title: "Growth", desc: "Continuous learning and adaptation to serve clients better." },
]

const team = [
  { role: "Chief Executive Officer", name: "James Mwangi", expertise: "30+ years construction & infrastructure" },
  { role: "Engineering Director", name: "Elizabeth Zhao", expertise: "Structural design & project delivery" },
  { role: "Safety Manager", name: "David Nkomo", expertise: "HSE systems & compliance" },
  { role: "Equipment Manager", name: "Thomas Banda", expertise: "Fleet management & logistics" },
]

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Dawn" 
        subtitle="Building Zimbabwe's future with integrity, expertise, and commitment to excellence since 2010."
        image="https://images.unsplash.com/photo-1504917595217-340dab6ba18b?q=80&w=1600&auto=format&fit=crop" 
      />

      {/* Our Story */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionTitle title="Our Story" />
              <p className="subtext text-brand-muted">
                Founded in 2010, Dawn Construction Group began with a simple vision: deliver world-class construction and infrastructure solutions to Zimbabwe. What started as a small team has grown into a trusted partner for major residential, commercial, and industrial projects.
              </p>
              <p className="subtext text-brand-muted">
                Over 13 years, we've completed 250+ projects spanning 2.5+ million square meters, maintained a 98% on-time delivery record, and built a reputation for uncompromising quality and safety.
              </p>
              <p className="subtext text-brand-muted">
                Today, we operate with a team of 150+ skilled engineers, technicians, and operators, backed by modern equipment and systems that ensure every project exceeds expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-elevate"
            >
              <Image
                src="https://images.unsplash.com/photo-1504917595217-340dab6ba18b?q=80&w=1600&auto=format&fit=crop"
                alt="Team at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide every decision and action." 
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded-2xl glass space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 rounded-lg bg-brand-accent/20 w-fit">
                    <Icon className="text-brand-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">{value.title}</h3>
                  <p className="text-brand-muted">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Team Leadership */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle 
            title="Leadership Team" 
            subtitle="Seasoned professionals driving excellence." 
          />
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 w-48 mx-auto rounded-xl overflow-hidden shadow-card">
                  <Image
                    src={`https://i.pravatar.cc/300?img=${idx}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary text-lg">{member.name}</h3>
                  <p className="text-sm text-brand-accent font-semibold">{member.role}</p>
                  <p className="text-xs text-brand-muted mt-2">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <SectionTitle 
              title="Certified & Trusted" 
              subtitle="Meeting international standards across all operations." 
            />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { cert: "ISO 9001:2015", desc: "Quality Management Systems" },
                { cert: "ISO 45001:2018", desc: "Occupational Health & Safety" },
                { cert: "ISO 14001:2015", desc: "Environmental Management" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-8 rounded-xl glass space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-brand-accent">{item.cert}</div>
                  <p className="text-brand-muted font-semibold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="hero-text text-white">Partner With Us</h2>
            <p className="subtext text-white/90">
              Whether you're an enterprise client, contractor, or supplier, we're committed to building lasting relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/contact" className="btn-primary bg-brand-accent text-brand-primary">
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
