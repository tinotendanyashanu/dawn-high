'use client'
import PageHero from "@components/PageHero"
import Container from "@components/Container"
import SectionTitle from "@components/SectionTitle"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"

const offices = [
  {
    name: "Head Office",
    location: "123 Construction Ave, Harare",
    phone: "+263 (0) 242 123 456",
    email: "info@dawn.construction",
    hours: "Mon–Fri: 8:00–17:00 | Sat: 9:00–13:00"
  },
  {
    name: "Bulawayo Branch",
    location: "456 Industrial Way, Bulawayo",
    phone: "+263 (0) 129 345 678",
    email: "bulawayo@dawn.construction",
    hours: "Mon–Fri: 8:00–17:00"
  },
]

const services = [
  { icon: Phone, label: "Phone", value: "+263 (0) 242 123 456", link: "tel:+263242123456" },
  { icon: Mail, label: "Email", value: "info@dawn.construction", link: "mailto:info@dawn.construction" },
  { icon: MessageSquare, label: "WhatsApp", value: "+263 772 123 456", link: "#" },
  { icon: Headphones, label: "Support", value: "24/7 Emergency Line", link: "tel:+263772123456" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Get In Touch" 
        subtitle="We're ready to discuss your project or equipment needs. Reach out—we respond quickly."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" 
      />

      {/* Quick Contact */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.a
                  key={idx}
                  href={service.link}
                  className="p-6 rounded-2xl glass text-center space-y-4 card-hover group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-lg bg-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-primary transition">
                      <Icon className="text-brand-accent group-hover:text-brand-primary transition" size={28} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-brand-muted">{service.label}</p>
                    <p className="font-bold text-brand-primary">{service.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="Our Offices" 
            subtitle="Multiple locations across Zimbabwe to serve you better." 
          />
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl glass space-y-6"
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">{office.name}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <div className="space-y-1">
                      <p className="font-semibold text-brand-primary text-sm">Address</p>
                      <p className="text-brand-muted">{office.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <div className="space-y-1">
                      <p className="font-semibold text-brand-primary text-sm">Phone</p>
                      <a href={`tel:${office.phone}`} className="text-brand-accent hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <div className="space-y-1">
                      <p className="font-semibold text-brand-primary text-sm">Email</p>
                      <a href={`mailto:${office.email}`} className="text-brand-accent hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <div className="space-y-1">
                      <p className="font-semibold text-brand-primary text-sm">Hours</p>
                      <p className="text-brand-muted text-sm">{office.hours}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 px-4 rounded-lg bg-brand-accent text-brand-primary font-semibold hover:brightness-95 transition-all">
                  Request Appointment
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Request CTA */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="What Can We Help With?" 
              subtitle="From project consultations to equipment rentals—we're here for all your construction needs." 
            />
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { title: "Construction Projects", desc: "Residential, commercial, and civil works consultation and execution." },
                { title: "Equipment Rental", desc: "Heavy machinery and vehicle hire with operators available." },
                { title: "Project Management", desc: "Expert oversight, budgeting, and timeline management." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl border-2 border-brand-accent/20 hover:border-brand-accent transition-all space-y-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-brand-primary">{item.title}</h3>
                  <p className="text-sm text-brand-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ-ish Section */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="Frequently Asked" 
            subtitle="Quick answers to common questions." 
          />
          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What areas do you serve?",
                a: "We operate nationwide across Zimbabwe from our Harare and Bulawayo offices. Project sites beyond major urban centers are served on a case-by-case basis."
              },
              {
                q: "How quickly can you mobilize equipment?",
                a: "Most equipment is available within 24–48 hours of request. For emergency situations, we offer same-day deployment from nearby locations."
              },
              {
                q: "Do you provide financing for projects?",
                a: "We work with several financial institutions and can facilitate discussions. Contact our sales team for options suited to your project scale."
              },
              {
                q: "Are your operators experienced?",
                a: "Yes. All operators are licensed, trained, and maintain minimum 5+ years of field experience. Safety certifications are current and verified."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl glass space-y-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-brand-primary text-lg">{item.q}</h3>
                <p className="text-brand-muted">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="hero-text text-white">Ready to Start?</h2>
            <p className="subtext text-white/90">
              Whether it's a quick question or a detailed project proposal, we're just a call or message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:+263242123456" className="btn-primary bg-brand-accent text-brand-primary">
                Call Us Now
              </a>
              <a href="mailto:info@dawn.construction" className="btn-outline">
                Send Email
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
