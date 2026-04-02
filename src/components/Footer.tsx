import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ascent Hive" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-heading text-lg font-bold text-gradient-gold">ASCENT HIVE</span>
        </div>

        <p className="font-heading text-xl font-bold text-gradient-gold">Rise Together</p>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Ascent Hive. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
