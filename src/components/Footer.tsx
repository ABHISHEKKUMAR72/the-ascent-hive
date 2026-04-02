import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ascent Hive" className="h-10 w-10 rounded-lg object-cover" />
          <span className="font-heading text-lg font-bold text-gradient-gold">ASCENT HIVE</span>
        </div>

        <p className="font-heading text-2xl font-bold text-gradient-gold">Rise Together</p>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#founders" className="hover:text-primary transition-colors">Founders</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Ascent Hive. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
