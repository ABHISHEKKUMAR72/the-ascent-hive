import { motion } from "framer-motion";
import { Mail, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("admin@ascenthive.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "3e1ecd26-488c-4397-bb3e-cd319900a111",
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail size={18} className="text-primary" />
            <span>admin@ascenthive.in</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={copyEmail}
              className="ml-1 p-1 rounded hover:bg-secondary transition-colors"
              title="Copy email"
            >
              {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
            </motion.button>
          </div>
        </motion.div>

        {success ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center gradient-card rounded-2xl p-12 border-glow"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent! 🎉</h3>
            <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => setSuccess(false)}
              className="mt-6 gradient-gold text-primary-foreground px-6 py-2 rounded-xl font-bold"
            >
              Send Another
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full gradient-gold text-primary-foreground py-3 rounded-xl font-bold glow-button flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {sending ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;