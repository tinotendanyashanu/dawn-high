'use client'
import PageHero from "@components/PageHero"
import Container from "@components/Container"
import SectionTitle from "@components/SectionTitle"
import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, Truck, DollarSign, Clock } from "lucide-react"

const equipment = [
  {
    title: "CAT 320 Excavator",
    desc: "Versatile mid-size excavator ideal for trenching, demolition, and material handling. Modern cab with air conditioning.",
    specs: { engine: "129 HP", bucket: "1.6 m³", weight: "32 tons", daily: "$450" },
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "CAT 140 Grader",
    desc: "Motor grader for road maintenance, land leveling, and surface preparation. GPS-equipped for precision.",
    specs: { engine: "155 HP", blade: "3.66m", weight: "17 tons", daily: "$350" },
    img: "https://images.unsplash.com/photo-1581092167562-40aa08e2471f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "D6 Dozer",
    desc: "Heavy-duty bulldozer for earthmoving, site preparation, and land clearing. Powerful and reliable.",
    specs: { engine: "210 HP", blade: "3.88m", weight: "36 tons", daily: "$550" },
    img: "https://images.unsplash.com/photo-1581092925329-0f51e6f47e9d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Wheel Loader",
    desc: "Nimble loader for material movement, stockpile management, and loading operations.",
    specs: { engine: "110 HP", bucket: "2.5 m³", weight: "18 tons", daily: "$300" },
    img: "https://images.unsplash.com/photo-1581092925329-0f51e6f47e9d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Tipper Truck (Scania)",
    desc: "Heavy-duty 6x4 tipper for hauling aggregates, soil, and waste. 20+ m³ capacity.",
    specs: { engine: "320 HP", capacity: "20 m³", weight: "24 tons", daily: "$280" },
    img: "https://images.unsplash.com/photo-1581092161562-40aa08e2471f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Lowbed Trailer",
    desc: "Specialized transport for heavy machinery and equipment. Hydraulic ramps and tie-down points.",
    specs: { capacity: "40 tons", deck: "13m", height: "1.2m", daily: "$220" },
    img: "https://images.unsplash.com/photo-1581092167562-40aa08e2471f?q=80&w=1600&auto=format&fit=crop"
  },
]

const benefits = [
  { icon: Zap, title: "Well-Maintained", desc: "All equipment serviced monthly and certified for safety." },
  { icon: Truck, title: "Expert Operators", desc: "Qualified, licensed operators available on demand." },
  { icon: DollarSign, title: "Competitive Rates", desc: "Transparent pricing with volume and long-term discounts." },
  { icon: Clock, title: "24/7 Support", desc: "Rapid deployment and on-site technical support available." },
]

export default function FleetPage() {
  return (
    <>
      <PageHero 
        title="Fleet Hire" 
        subtitle="Modern, well-maintained equipment available nationwide. From excavators to tippers—we have what you need."
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop" 
      />

      {/* Equipment Grid */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle 
            title="Our Fleet" 
            subtitle="State-of-the-art equipment ready for your project." 
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-card hover:shadow-elevate transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-white space-y-4">
                  <h3 className="text-xl font-bold text-brand-primary">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-light">
                    {Object.entries(item.specs).map(([key, val]) => (
                      <div key={key} className="space-y-1">
                        <p className="text-xs uppercase tracking-wider text-brand-muted/60 font-semibold">
                          {key}
                        </p>
                        <p className="font-bold text-brand-primary">{val}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-4 py-2 px-4 rounded-lg bg-brand-accent/10 text-brand-accent font-semibold hover:bg-brand-accent hover:text-brand-primary transition-all">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24 bg-brand-light">
        <Container>
          <SectionTitle 
            title="Why Hire From Us?" 
            subtitle="Professional equipment management you can trust." 
          />
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  className="text-center space-y-4 p-6 rounded-xl glass"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-lg bg-brand-accent/20">
                      <Icon className="text-brand-accent" size={32} />
                    </div>
                  </div>
                  <h4 className="font-bold text-brand-primary">{benefit.title}</h4>
                  <p className="text-sm text-brand-muted">{benefit.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Pricing & Contact */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <SectionTitle 
              title="Get Equipment Moving" 
              subtitle="Simple pricing, swift deployment." 
            />
            <p className="subtext text-brand-muted">
              Daily rates shown include operator. Weekly and monthly discounts available. Full insurance and maintenance included.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <a href="/contact" className="btn-primary">Contact Sales</a>
              <a href="tel:+263242123456" className="btn-secondary">Call: +263 (0) 242 123 456</a>
              <a href="#" className="btn-outline border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">Download Catalog</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
