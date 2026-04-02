import { motion } from "framer-motion";
import { Users, LayoutDashboard, GraduationCap, BarChart3 } from "lucide-react";

const features = [
  { icon: Users, title: "Team Collaboration", desc: "Real-time teamwork with chat, tasks, and shared workspaces." },
  { icon: LayoutDashboard, title: "Project Dashboard", desc: "Track milestones, deadlines, and deliverables in one place." },
  { icon: GraduationCap, title: "Mentor Guidance", desc: "Get paired with industry mentors who guide your journey." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Visualize your growth and startup metrics over time." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Powerful <span className="text-gradient-gold">Features</span>
        </h2>
        <p className="text-muted-foreground text-lg">Everything you need to build and scale</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="gradient-card rounded-2xl p-6 border-glow flex gap-5 items-start transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
              <f.icon size={22} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
