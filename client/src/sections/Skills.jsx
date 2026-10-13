import ScrollReveal from '../components/ScrollReveal';

const capabilities = [
  {
    title: 'Frontend',
    items: ['React / Next.js', 'Vue.js / Nuxt', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    items: ['Flutter / Dart', 'React Native', 'Firebase', 'Supabase'],
  },
  {
    title: 'Backend',
    items: ['Node.js / Express', 'Python / FastAPI', 'PostgreSQL / MySQL', 'MongoDB'],
  },
  {
    title: 'Infrastructure',
    items: ['Git / GitHub', 'Docker / CI-CD', 'AWS / Vercel', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-24 md:py-40">
      <div className="mx-auto max-w-container">

        <ScrollReveal>
          <p className="text-caption uppercase font-sans font-medium text-text-muted tracking-[0.1em] mb-16 md:mb-20">
            Stack
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {capabilities.map((group, groupIndex) => (
            <ScrollReveal key={group.title} delay={groupIndex * 0.08}>
              <div>
                <h3 className="text-[13px] font-sans font-semibold text-text-primary uppercase tracking-[0.06em] mb-5">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map(item => (
                    <li
                      key={item}
                      className="text-small text-text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
