import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end px-6 md:px-8 pb-20 md:pb-28 pt-32"
    >
      <div className="mx-auto w-full max-w-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-caption uppercase font-sans font-medium text-text-muted tracking-[0.12em]"
        >
          Yogyakarta, Indonesia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="block font-serif text-display-xl">Cahyo</span>
          <span className="block font-serif text-display text-text-secondary italic mt-1">
            Full Stack &amp; Apps Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-[440px] text-body text-text-secondary"
        >
          Building web platforms and mobile applications with clean
          architecture and attention to craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex items-center gap-8"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-accent text-bg-primary px-7 py-3.5 text-[14px] font-sans font-medium tracking-[-0.01em] transition-all duration-300 hover:opacity-85"
          >
            Selected work
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="text-[14px] font-sans font-medium text-text-secondary tracking-[-0.01em] transition-colors hover:text-text-primary"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
