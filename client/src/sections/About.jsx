import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 py-24 md:py-40">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

          {/* Left: Bio */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="text-caption uppercase font-sans font-medium text-text-muted tracking-[0.1em] mb-8">
                About
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6 max-w-[540px]">
                <p className="font-serif text-heading">
                  I'm Cahyo, a developer based in Yogyakarta
                  building for web and mobile platforms.
                </p>
                <p className="text-body text-text-secondary">
                  Currently studying Information Systems at AMIKOM University
                  Yogyakarta. I work across the full stack, from architecting
                  scalable APIs to building smooth React interfaces and
                  shipping cross-platform Flutter apps.
                </p>
                <p className="text-body text-text-muted">
                  I care about clean code, honest design, and software
                  that respects the people who use it.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Details */}
          <div className="md:col-span-5 md:pt-14">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {[
                  { label: 'Role', value: 'Full Stack & Apps Developer' },
                  { label: 'Location', value: 'Yogyakarta, Indonesia' },
                  { label: 'Education', value: 'Information Systems, AMIKOM University' },
                  { label: 'Focus', value: 'Web Platforms, Mobile Apps, API Design' },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="block text-caption uppercase font-sans font-medium text-text-muted tracking-[0.06em] mb-1">
                      {item.label}
                    </span>
                    <span className="text-small text-text-primary">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
