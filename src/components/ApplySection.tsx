import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const ApplySection = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === "Tally.FormSubmitted") {
        setSubmitted(true);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const inputClass = "w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all";
  const errorClass = "text-red-400 text-xs mt-1";
  const labelClass = "text-foreground font-bold text-sm mb-2 block";

  const OptionButton = ({ selected, label, onClick, letter }: { selected: boolean; label: string; onClick: () => void; letter: string }) => (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all text-left ${
        selected ? "border-primary bg-primary/10 text-foreground" : "border-border bg-secondary/50 text-muted-foreground hover:border-muted-foreground"
      }`}
    >
      <span className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold ${
        selected ? "gradient-gold text-primary-foreground" : "bg-secondary text-muted-foreground border border-border"
      }`}>{letter}</span>
      <span className="text-sm">{label}</span>
    </motion.button>
  );

  const RatingScale = ({ value, onChange, max = 10, error }: { value: number | null; onChange: (v: number) => void; max?: number; error?: string }) => (
    <div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: max + 1 }, (_, i) => (
          <motion.button
            key={i}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onChange(i)}
            className={`w-10 h-10 rounded-xl border text-sm font-semibold transition-all ${
              value === i ? "border-primary gradient-gold text-primary-foreground" : "border-border bg-secondary text-muted-foreground hover:border-muted-foreground"
            }`}
          >
            {i}
          </motion.button>
        ))}
      </div>
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );

  if (submitted) {
    return (
      <section id="apply" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center gradient-card rounded-2xl border-glow p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <CheckCircle className="mx-auto text-primary mb-6" size={72} />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Thank You, <span className="text-gradient-gold">{form.name.split(" ")[0]}!</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-2">
              Your application for the <strong className="text-foreground">AscentHive Fellowship Program</strong> has been submitted successfully.
            </p>
            <p className="text-muted-foreground mb-8">
              We'll review your application and get back to you at <strong className="text-primary">{form.email}</strong> soon.
            </p>

            <div className="border-t border-border pt-8">
              <p className="text-foreground font-semibold mb-4">Follow us to stay updated 🚀</p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://www.instagram.com/ascenthive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm transition-all"
                >
                  <Instagram size={18} /> Instagram
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/ascenthive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm transition-all"
                >
                  <Linkedin size={18} /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://twitter.com/ascenthive"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary border border-border text-foreground font-semibold text-sm transition-all hover:border-primary"
                >
                  <Twitter size={18} /> Twitter
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AscentHive.in is a Growth Platform and Launchpad for Students. Our Fellowship offers collaborative, mentorship-based roles designed to accelerate your professional development and build real-world experience.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-lg mx-auto text-center gradient-card rounded-2xl p-12 border-glow"
            >
              <h3 className="font-heading text-3xl font-bold text-primary mb-3">
                Thanks for Applying! 🎉
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Welcome to The Ascent Hive! We've received your application. While we review it, we'd love for you to join our WhatsApp community to stay in the loop.
              </p>
              <motion.a
                href="https://chat.whatsapp.com/H9CO4mBUX60BshnvP2U9gI"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-6 py-3 rounded-xl font-bold glow-button"
              >
                <MessageCircle size={18} />
                Join our WhatsApp Community
              </motion.a>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-2xl mx-auto"
            >
              <iframe
                id="tally-iframe"
                src="https://tally.so/embed/jaW8V4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                title="Application Form"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ApplySection;