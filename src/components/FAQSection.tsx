import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Who can apply to the AscentHive Fellowship?", a: "Any currently enrolled college/university student with a passion for building, learning, and entrepreneurship can apply. No prior startup experience required!" },
  { q: "Is this a paid fellowship?", a: "The fellowship is designed as a learning and growth experience. While it's not a paid position, you gain real-world startup experience, mentorship, and a strong network." },
  { q: "How much time commitment is expected?", a: "We expect 8-12 hours per week. The schedule is flexible and designed to work around your academic commitments." },
  { q: "Can I change my department/role later?", a: "Yes! We understand interests evolve. You can discuss role changes with your mentor after the initial onboarding period." },
  { q: "What happens after I submit my application?", a: "Our team reviews every application carefully. If shortlisted, you'll receive an email with next steps, including a brief interview or task round." },
  { q: "Do I need to be from a specific college?", a: "No, we welcome students from all colleges and universities across India. Diversity of thought and background is what makes our teams strong." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to know before applying</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="gradient-card rounded-xl border-glow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-bold text-foreground text-sm pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={18} className="text-primary shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
