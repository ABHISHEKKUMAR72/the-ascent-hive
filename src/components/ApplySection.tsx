import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ApplySection = () => {
  const [form, setForm] = useState({ name: "", email: "", college: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:hello@ascenthive.in?subject=Application from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0ACollege: ${form.college}%0ARole: ${form.role}`;
  };

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

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto gradient-card rounded-2xl border-glow p-8 space-y-4"
        >
          {[
            { key: "name", type: "text", placeholder: "Full Name" },
            { key: "email", type: "email", placeholder: "Email Address" },
            { key: "college", type: "text", placeholder: "College / University" },
            { key: "role", type: "text", placeholder: "Preferred Role (Developer, Designer, etc.)" },
          ].map((field) => (
            <input
              key={field.key}
              type={field.type}
              placeholder={field.placeholder}
              required
              value={form[field.key]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            />
          ))}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full gradient-gold text-primary-foreground py-3 rounded-xl font-bold glow-button flex items-center justify-center gap-2"
          >
            Submit Application <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplySection;
