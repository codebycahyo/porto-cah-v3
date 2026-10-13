import ScrollReveal from '../components/ScrollReveal';

const links = [
  { label: 'Email', value: 'Cahsirat05@gmail.com', href: 'mailto:Cahsirat05@gmail.com' },
  { label: 'GitHub', value: 'github.com/codebycahyo', href: 'https://github.com/codebycahyo' },
  { label: 'LinkedIn', value: 'linkedin.com/in/cahyo-', href: 'https://www.linkedin.com/in/cahyo-/' },
  { label: 'Instagram', value: '@cahyo.dev', href: 'https://www.instagram.com/cahyo.dev/' },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-8 py-24 md:py-40">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

          {/* Left — CTA */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <h2 className="font-serif text-display mb-6 max-w-[400px]">
                Get in touch
              </h2>
              <p className="text-body text-text-secondary max-w-[400px] mb-10">
                Open to freelance projects, full-time roles, and remote
                collaborations. Drop me a line.
              </p>

              <a
                href="mailto:Cahsirat05@gmail.com"
                className="group inline-flex items-center gap-3 bg-accent text-bg-primary px-7 py-3.5 text-[14px] font-sans font-medium tracking-[-0.01em] transition-all duration-300 hover:opacity-85"
              >
                Cahsirat05@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right — Links */}
          <div className="md:col-span-5 md:pt-2">
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                {links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    className="group block transition-colors"
                  >
                    <span className="block text-caption uppercase font-sans font-medium text-text-muted tracking-[0.06em] mb-1 group-hover:text-text-secondary transition-colors">
                      {link.label}
                    </span>
                    <span className="text-small text-text-primary group-hover:text-accent transition-colors duration-200">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
