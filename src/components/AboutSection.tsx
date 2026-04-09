import { motion } from "framer-motion";
import { Users, Lightbulb, Target } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Collaborate",
    desc: "Work with driven peers across disciplines — designers, developers, marketers — to build something real.",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    desc: "Take raw ideas and shape them into viable products with guidance from experienced mentors.",
  },
  {
    icon: Target,
    title: "Launch",
    desc: "Go beyond classroom projects. Ship real products, acquire users, and build your startup portfolio.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          What is <span className="text-gradient-gold">The Ascent Hive</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A startup ecosystem where students collaborate, build real projects, and launch startups — powered by mentorship and community.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="gradient-card rounded-2xl p-8 border-glow transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
              <card.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;