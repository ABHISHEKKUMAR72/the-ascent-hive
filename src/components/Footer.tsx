import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);

  if (section) {
    window.history.replaceState(null, "", `#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const socialLinks = [
  { Icon: Twitter, href: "https://twitter.com/ascenthive" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/ascenthive/" },
  { Icon: Instagram, href: "https://www.instagram.com/ascenthive/" },
  { Icon: Github, href: "https://github.com/ascenthive" },
];

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
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href.slice(1))}
                className="hover:text-primary transition-colors"
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#founders" className="hover:text-primary transition-colors">Founders</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/113383915/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com/ascenthive.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://chat.whatsapp.com/H9CO4mBUX60BshnvP2U9gI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
            >
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-8 pt-8 border-t border-border text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Ascent Hive. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;