import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Instagram, Linkedin, Twitter, Upload, X } from "lucide-react";

const graduationYears = ["2028", "2029", "2030"];
const departments = [
  "Technology/Development",
  "Marketing/Growth",
  "Design",
  "Operations/Project Management",
  "Finance/Business Strategy",
];
const factors = ["Learning", "Networking", "Flexibility"];
const levels = ["Low", "Moderate", "High"];

const ApplySection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    graduationYear: "",
    graduationYearOther: "",
    linkedin: "",
    about: "",
    startupInterest: "",
    startupIdea: "",
    department: "",
    departmentOther: "",
    skillRating: null as number | null,
    technologies: "",
    collegeProof: null as File | null,
    factorImportance: { Learning: "", Networking: "", Flexibility: "" } as Record<string, string>,
    comfortRating: null as number | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateForm = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.college.trim()) e.college = "Please enter your college name";
    if (!form.graduationYear) e.graduationYear = "Please select a year";
    if (form.graduationYear === "Other" && !form.graduationYearOther.trim()) e.graduationYearOther = "Please enter your graduation year";
    if (!form.linkedin.trim()) e.linkedin = "Please enter your LinkedIn URL";
    if (!form.about.trim()) e.about = "Please tell us about yourself";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.startupInterest) e.startupInterest = "Please select an option";
    if (!form.startupIdea) e.startupIdea = "Please select an option";
    if (!form.department && !form.departmentOther) e.department = "Please select a department";
    if (form.department === "Other" && !form.departmentOther.trim()) e.departmentOther = "Please enter your department";
    if (form.skillRating === null) e.skillRating = "Please rate your proficiency";
    if (!form.technologies.trim()) e.technologies = "Please enter technologies";
    if (!form.collegeProof) e.collegeProof = "Please upload your college ID";
    if (!form.factorImportance.Learning || !form.factorImportance.Networking || !form.factorImportance.Flexibility) e.factorImportance = "Please select an option for each row";
    if (form.comfortRating === null) e.comfortRating = "Please select a value";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setSubmitted(true);
    }
  };

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

        {/* Step indicator */}
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= s ? "gradient-gold text-primary-foreground" : "bg-secondary text-muted-foreground border border-border"
              }`}>{s}</div>
              <span className={`text-sm hidden sm:inline ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                {s === 1 ? "Personal Info" : "Skills & Preferences"}
              </span>
              {s === 1 && <div className={`w-12 h-0.5 ${step >= 2 ? "bg-primary" : "bg-border"} transition-all`} />}
            </div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto gradient-card rounded-2xl border-glow p-8"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-5">
                <div>
                  <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                  <input type="text" value={form.name} onChange={(e) => updateForm("name", e.target.value)} placeholder="Enter your full name" className={inputClass} />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>

                <div>
                  <label className={labelClass}>Email Address <span className="text-red-400">*</span></label>
                  <input type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="your@email.com" className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>

                <div>
                  <label className={labelClass}>Current University/College Name <span className="text-red-400">*</span></label>
                  <input type="text" value={form.college} onChange={(e) => updateForm("college", e.target.value)} placeholder="Enter your college/university" className={inputClass} />
                  {errors.college && <p className={errorClass}>{errors.college}</p>}
                </div>

                <div>
                  <label className={labelClass}>Expected Year of Graduation <span className="text-red-400">*</span></label>
                  <div className="flex flex-wrap gap-2">
                    {graduationYears.map((y, i) => (
                      <OptionButton key={y} selected={form.graduationYear === y} label={y} onClick={() => updateForm("graduationYear", y)} letter={String.fromCharCode(65 + i)} />
                    ))}
                    <OptionButton selected={form.graduationYear === "Other"} label="Other" onClick={() => updateForm("graduationYear", "Other")} letter="D" />
                  </div>
                  {form.graduationYear === "Other" && (
                    <input type="text" value={form.graduationYearOther} onChange={(e) => updateForm("graduationYearOther", e.target.value)} placeholder="Type your answer" className={`${inputClass} mt-2`} />
                  )}
                  {(errors.graduationYear || errors.graduationYearOther) && <p className={errorClass}>{errors.graduationYear || errors.graduationYearOther}</p>}
                </div>

                <div>
                  <label className={labelClass}>LinkedIn Profile URL <span className="text-red-400">*</span></label>
                  <input type="url" value={form.linkedin} onChange={(e) => updateForm("linkedin", e.target.value)} placeholder="https://linkedin.com/in/yourprofile" className={inputClass} />
                  {errors.linkedin && <p className={errorClass}>{errors.linkedin}</p>}
                </div>

                <div>
                  <label className={labelClass}>Tell us a bit about yourself <span className="text-red-400">*</span></label>
                  <textarea value={form.about} onChange={(e) => updateForm("about", e.target.value)} placeholder="Share your background, interests, and goals..." rows={4} className={`${inputClass} resize-y`} />
                  {errors.about && <p className={errorClass}>{errors.about}</p>}
                </div>

                <motion.button
                  type="button"
                  onClick={handleNext}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-gold text-primary-foreground py-3 rounded-xl font-bold glow-button flex items-center justify-center gap-2"
                >
                  Next Step →
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div>
                  <label className={labelClass}>Startup Interest <span className="text-red-400">*</span></label>
                  <div className="flex flex-wrap gap-2">
                    <OptionButton selected={form.startupInterest === "Yes"} label="Yes" onClick={() => updateForm("startupInterest", "Yes")} letter="A" />
                    <OptionButton selected={form.startupInterest === "No"} label="No" onClick={() => updateForm("startupInterest", "No")} letter="B" />
                  </div>
                  {errors.startupInterest && <p className={errorClass}>{errors.startupInterest}</p>}
                </div>

                <div>
                  <label className={labelClass}>Do you have a startup idea? <span className="text-red-400">*</span></label>
                  <div className="flex flex-col gap-2">
                    <OptionButton selected={form.startupIdea === "Yes"} label="I have an idea I'd like to share/build at AscentHive." onClick={() => updateForm("startupIdea", "Yes")} letter="A" />
                    <OptionButton selected={form.startupIdea === "No"} label="No" onClick={() => updateForm("startupIdea", "No")} letter="B" />
                  </div>
                  {errors.startupIdea && <p className={errorClass}>{errors.startupIdea}</p>}
                </div>

                <div>
                  <label className={labelClass}>Which department/role are you primarily applying for? <span className="text-red-400">*</span></label>
                  <div className="flex flex-col gap-2">
                    {departments.map((d, i) => (
                      <OptionButton key={d} selected={form.department === d} label={d} onClick={() => { updateForm("department", d); updateForm("departmentOther", ""); }} letter={String.fromCharCode(65 + i)} />
                    ))}
                    <OptionButton selected={form.department === "Other"} label="Other" onClick={() => updateForm("department", "Other")} letter="F" />
                  </div>
                  {form.department === "Other" && (
                    <input type="text" value={form.departmentOther} onChange={(e) => updateForm("departmentOther", e.target.value)} placeholder="Type your answer" className={`${inputClass} mt-2`} />
                  )}
                  <p className="text-muted-foreground text-xs mt-1">(You can change this later)</p>
                  {(errors.department || errors.departmentOther) && <p className={errorClass}>{errors.department || errors.departmentOther}</p>}
                </div>

                <div>
                  <label className={labelClass}>Primary Skill Assessment: Rate your proficiency (1-10) <span className="text-red-400">*</span></label>
                  <RatingScale value={form.skillRating} onChange={(v) => updateForm("skillRating", v)} error={errors.skillRating} />
                </div>

                <div>
                  <label className={labelClass}>What specific technologies do you want to master at AscentHive.in? <span className="text-red-400">*</span></label>
                  <input type="text" value={form.technologies} onChange={(e) => updateForm("technologies", e.target.value)} placeholder="e.g., React, Python, Figma..." className={inputClass} />
                  {errors.technologies && <p className={errorClass}>{errors.technologies}</p>}
                </div>

                <div>
                  <label className={labelClass}>Verification: Upload College ID or Enrollment Proof <span className="text-red-400">*</span></label>
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-primary/50 ${
                      form.collegeProof ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size <= 10 * 1024 * 1024) updateForm("collegeProof", file);
                      }}
                    />
                    {form.collegeProof ? (
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <CheckCircle size={20} />
                        <span className="text-sm font-medium">{form.collegeProof.name}</span>
                        <button type="button" onClick={(e) => { e.stopPropagation(); updateForm("collegeProof", null); }} className="ml-2 text-muted-foreground hover:text-red-400">
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                        <p className="text-muted-foreground text-sm">Click to choose a file or drag here</p>
                        <p className="text-muted-foreground text-xs mt-1">Size limit: 10 MB</p>
                      </>
                    )}
                  </div>
                  {errors.collegeProof && <p className={errorClass}>{errors.collegeProof}</p>}
                </div>

                <div>
                  <label className={labelClass}>Importance of Factors <span className="text-red-400">*</span></label>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-muted-foreground">
                          <th className="text-left py-2 pr-4"></th>
                          {levels.map((l) => <th key={l} className="text-center py-2 px-4">{l}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {factors.map((f) => (
                          <tr key={f} className="border-t border-border">
                            <td className="py-3 pr-4 text-foreground font-medium">{f}</td>
                            {levels.map((l) => (
                              <td key={l} className="text-center py-3 px-4">
                                <button
                                  type="button"
                                  onClick={() => updateForm("factorImportance", { ...form.factorImportance, [f]: l })}
                                  className={`w-5 h-5 rounded-full border-2 transition-all ${
                                    form.factorImportance[f] === l ? "border-primary bg-primary" : "border-muted-foreground hover:border-primary"
                                  }`}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {errors.factorImportance && <p className={errorClass}>{errors.factorImportance}</p>}
                </div>

                <div>
                  <label className={labelClass}>Comfort with fast-paced environment <span className="text-red-400">*</span></label>
                  <RatingScale value={form.comfortRating} onChange={(v) => updateForm("comfortRating", v)} error={errors.comfortRating} />
                </div>

                <div className="flex gap-3 pt-2">
                  <motion.button
                    type="button"
                    onClick={() => setStep(1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-xl font-bold border border-border text-foreground hover:border-primary/50 transition-all"
                  >
                    ← Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 gradient-gold text-primary-foreground py-3 rounded-xl font-bold glow-button flex items-center justify-center gap-2"
                  >
                    Apply for Fellowship <Send size={18} />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplySection;
