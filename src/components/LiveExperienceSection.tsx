import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Users, Flag } from "lucide-react";

const tasks = [
  { title: "Design landing page", status: "done" },
  { title: "Build MVP backend", status: "done" },
  { title: "User testing round 1", status: "in-progress" },
  { title: "Pitch deck preparation", status: "todo" },
  { title: "Launch on Product Hunt", status: "todo" },
];

const team = [
  { name: "Arya S.", role: "Designer", color: "bg-primary" },
  { name: "Ravi K.", role: "Developer", color: "bg-accent" },
  { name: "Priya M.", role: "Marketer", color: "bg-ring" },
];

const milestones = [
  { label: "Ideation", done: true },
  { label: "MVP", done: true },
  { label: "Beta Launch", done: false },
  { label: "Growth", done: false },
];

const LiveExperienceSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Live <span className="text-gradient-gold">Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg">A glimpse into your startup dashboard</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card rounded-2xl border-glow overflow-hidden"
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="font-heading text-lg font-bold">EcoTrack — Green Analytics</h3>
            <p className="text-muted-foreground text-sm">Sprint 3 · Week 2</p>
          </div>
          <span className="gradient-gold text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Active</span>
        </div>

        <div className="p-6 grid md:grid-cols-3 gap-6">
          {/* Progress + Tasks */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold">Overall Progress</span>
              <span className="text-primary text-sm font-bold">48%</span>
            </div>
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "48%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full gradient-gold rounded-full"
              />
            </div>

            <h4 className="text-sm font-semibold mb-3">Tasks</h4>
            <div className="space-y-2">
              {tasks.map((t) => (
                <motion.div
                  key={t.title}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {t.status === "done" ? (
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  ) : t.status === "in-progress" ? (
                    <Clock size={16} className="text-accent flex-shrink-0" />
                  ) : (
                    <Circle size={16} className="text-muted-foreground flex-shrink-0" />
                  )}
                  <span className={`text-sm ${t.status === "done" ? "line-through text-muted-foreground" : ""}`}>
                    {t.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team + Milestones */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-primary" />
                <span className="text-sm font-semibold">Team</span>
              </div>
              <div className="space-y-3">
                {team.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${m.color} flex items-center justify-center text-xs font-bold text-primary-foreground`}>
                      {m.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flag size={16} className="text-primary" />
                <span className="text-sm font-semibold">Milestones</span>
              </div>
              <div className="space-y-2">
                {milestones.map((m, i) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${m.done ? "bg-primary" : "bg-muted"}`} />
                    <span className={`text-sm ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LiveExperienceSection;
