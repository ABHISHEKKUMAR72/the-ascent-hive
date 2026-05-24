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
          <p className="text-muted-foreground text-lg">We're currently working with our existing cohort.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center py-6 px-6 border border-yellow-500/30 rounded-xl bg-yellow-500/5 max-w-xl mx-auto">
            <p className="text-yellow-400 font-semibold text-lg">
              Applications Closed
            </p>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              We're currently working with our existing cohort.{" "}
              Use the{" "}
              <a href="#contact" className="text-yellow-400 underline underline-offset-2">
                Get In Touch
              </a>{" "}
              form below to express interest and we'll reach out when we open again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplySection;
