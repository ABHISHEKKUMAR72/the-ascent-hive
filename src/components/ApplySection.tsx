import { motion } from "framer-motion";

const ApplySection = () => {
  return (
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
          className="max-w-2xl mx-auto"
        >
          <iframe
            src="https://tally.so/embed/jaW8V4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="2200"
            frameBorder="0"
            scrolling="no"
            title="Application Form"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ApplySection;