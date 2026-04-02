import { motion } from "framer-motion";

const ApplySection = () => (
  <section id="apply" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Apply to Join <span className="text-gradient-gold">The Ascent Hive</span>
        </h2>
        <p className="text-muted-foreground text-lg">Ready to build something extraordinary? Apply now.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto gradient-card rounded-2xl border-glow overflow-hidden"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder={0}
          className="w-full bg-transparent"
          title="Application Form"
        >
          Loading…
        </iframe>
      </motion.div>
    </div>
  </section>
);

export default ApplySection;
