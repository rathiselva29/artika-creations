const socials = [
  { icon: 'fa-brands fa-instagram', href: 'https://instagram.com/rathii__selva', label: 'Instagram' },
  { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/917708704523', label: 'WhatsApp' },
  { icon: 'fas fa-envelope', href: 'mailto:ratthikas29@gmail.com', label: 'Email' },
  { icon: 'fas fa-sms', href: 'sms:+917708704523', label: 'SMS' },
];

const FooterSection = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center gap-5 mb-6">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label={s.label}
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>
      <p className="text-background/50 font-body text-sm">
        © 2026 Artika Gallery | Designed with passion for art.
      </p>
    </div>
  </footer>
);

export default FooterSection;
