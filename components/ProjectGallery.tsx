'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    alt: "Commercial complex",
    title: "Modern Commercial Complex"
  },
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    alt: "Residential development",
    title: "Luxury Residential Development"
  },
  {
    src: "https://images.unsplash.com/photo-1486438322978-b0acf61b9e31?q=80&w=1600&auto=format&fit=crop",
    alt: "Industrial facility",
    title: "Industrial Facility"
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop",
    alt: "Urban construction",
    title: "Urban Development"
  },
  {
    src: "https://images.unsplash.com/photo-1559074902-b8a0b7e37b3e?q=80&w=1600&auto=format&fit=crop",
    alt: "Construction site",
    title: "Active Construction Site"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    alt: "Completed project",
    title: "Completed Office Building"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
}

export default function ProjectGallery() {
  return (
    <motion.div 
      className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance] space-y-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {imgs.map((item, i) => (
        <motion.div 
          key={i} 
          className="relative overflow-hidden rounded-xl shadow-card hover:shadow-elevate break-inside-avoid group cursor-pointer transition-all duration-300"
          variants={itemVariants}
        >
          <Image 
            src={item.src} 
            alt={item.alt} 
            width={800} 
            height={600} 
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white">
              <p className="font-semibold text-sm drop-shadow-lg">{item.title}</p>
              <p className="text-xs text-white drop-shadow-md">View Project →</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
