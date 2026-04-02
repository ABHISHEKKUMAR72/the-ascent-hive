import { motion } from "framer-motion";
import { UserPlus, Users2, Hammer, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Join the Platform", desc: "Sign up and complete your builder profile." },
  { icon: Users2, title: "Get Matched", desc: "Get placed into a team based on skills and interests." },
  { icon: Hammer, title: "Build Real Projects", desc: "Work on real products with deadlines and milestones." },
  { icon: Rocket, title: "Launch Your Startup", desc: "Ship your product and start acquiring users." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          How It <span className="text-gradient-gold">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg">Four steps to your startup journey</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto">
                <step.icon size={28} className="text-primary-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </span>
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
            {i < 3 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
