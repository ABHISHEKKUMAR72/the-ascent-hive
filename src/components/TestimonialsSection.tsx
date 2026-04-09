import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    college: "IIT Delhi",
    role: "Tech Lead",
    text: "AscentHive gave me the real startup experience I couldn't find in classrooms. I built a product, led a team, and grew as a leader.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    college: "BITS Pilani",
    role: "Marketing Fellow",
    text: "The mentorship and community here are unmatched. I went from having no idea about growth marketing to running campaigns for a real startup.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    college: "NIT Warangal",
    role: "Design Fellow",
    text: "I designed an entire product from scratch. The collaborative environment pushed me to deliver my best work every single week.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          What Fellows <span className="text-gradient-gold">Say</span>
        </h2>
        <p className="text-muted-foreground text-lg">Hear from students who've been part of the journey</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="gradient-card rounded-2xl p-6 border-glow relative"
          >
            <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }, (_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-primary">{t.role} · {t.college}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
