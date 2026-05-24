import { siteConfig } from "@/config";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <Rocket size={16} />
            Applications currently closed
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Build.{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gradient-gold"
            >
              Rise.{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Repeat.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join the next generation of builders and turn ideas into real startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div className="text-center py-6 px-6 border border-yellow-500/30 rounded-xl bg-yellow-500/5 max-w-xl mx-auto">
              <p className="text-yellow-400 font-semibold text-lg">Applications Closed</p>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                We're currently working with our existing cohort.{" "}
                <a href="#contact" className="text-yellow-400 underline underline-offset-2">
                  Get In Touch
                </a>{" "}
                to express interest and we'll reach out when we open again.
              </p>
            </div>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-border text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:border-primary/50 transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: siteConfig.stats.founders, label: "Founders" },
            { value: siteConfig.stats.startups, label: "Startup" },
            { value: siteConfig.stats.builders, label: "Builders by 2026" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
