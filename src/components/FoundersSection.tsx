import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import ashishImage from "@/assets/founders/Ashish.jpeg";
import parasImage from "@/assets/founders/Paras.jpeg";
import abhishekImage from "@/assets/founders/Abhishekh.jpeg";

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2h3.308l-7.227 8.26L22.824 22h-6.65l-5.214-6.817L4.99 22H1.68l7.73-8.835L1.254 2h6.819l4.713 6.231L18.244 2Zm-1.161 18h1.833L7.062 3.896H5.095L17.083 20Z" />
  </svg>
);

const founders = [
  {
    name: "Ashish Raj",
    role: "Founder",
    desc: "Visionary leader passionate about empowering student entrepreneurs to build and scale real startups.",
    linkedin: "https://www.linkedin.com/in/ashish-raj-504760319/",
    x: "https://x.com/AshishRaj1909",
    image: ashishImage,
  },
  {
    name: "Paras Wadkar",
    role: "Co-Founder",
    desc: "Strategic thinker driving platform growth, partnerships, and community engagement.",
    linkedin: "https://www.linkedin.com/in/paras-wadkar-0772b3397/",
    x: "https://x.com/ParasWadkar7",
    image: parasImage,
  },
  {
    name: "Abhishek Gupta",
    role: "Co-Founder",
    desc: "Tech-first builder focused on creating seamless experiences for the next generation of founders.",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-72o77/",
    x: "https://x.com/Abhishekgupt_a7",
    image: abhishekImage,
  },
];

const FoundersSection = () => (
  <section id="founders" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Meet the <span className="text-gradient-gold">Founders</span>
        </h2>
        <p className="text-muted-foreground text-lg">The team behind The Ascent Hive</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="gradient-card rounded-2xl p-8 border-glow text-center transition-all duration-300 group overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden ring-2 ring-primary/30 transition-transform"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <h3 className="font-heading text-xl font-bold mb-1">{f.name}</h3>
            <span className="text-primary text-sm font-semibold">{f.role}</span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{f.desc}</p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center gap-3 mt-5"
            >
              <motion.a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={14} />
              </motion.a>
              {f.x && (
                <motion.a
                  href={f.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <XIcon size={14} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersSection;