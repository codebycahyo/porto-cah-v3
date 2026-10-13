import { projects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';

function ProjectLink({ project, className, children }) {
  if (project.link && project.link !== '#') {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <article className={className}>{children}</article>;
}

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="work" className="px-6 md:px-8 py-24 md:py-40">
      <div className="mx-auto max-w-container">
        <ScrollReveal>
          <p className="text-caption uppercase font-sans font-medium text-text-muted tracking-[0.1em] mb-16 md:mb-24">
            Selected Work
          </p>
        </ScrollReveal>

        {/* Featured Project — Full Width */}
        <ScrollReveal>
          <ProjectLink project={featured} className="group block mb-20 md:mb-32">
            <div className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden bg-bg-surface">
                <img
                  src={featured.image}
                  alt={`${featured.name}, ${featured.tag}`}
                  loading="eager"
                  fetchPriority="high"
                  width="1200"
                  height="675"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <h3 className={`font-serif text-heading md:text-display transition-colors duration-300${
                  featured.link !== '#' ? ' group-hover:text-accent' : ''
                }`}>
                  {featured.name}
                </h3>
                <p className="text-body text-text-secondary mt-3 max-w-[520px]">
                  {featured.desc}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right md:self-end">
                <span className="text-caption text-text-muted font-sans tracking-[0.04em]">
                  {featured.role} · {featured.year}
                </span>
                <div className="flex flex-wrap gap-x-3 mt-2 md:justify-end">
                  {featured.stack.map(tech => (
                    <span key={tech} className="text-caption text-text-muted font-sans">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ProjectLink>
        </ScrollReveal>

        {/* Remaining Projects — Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24">
          {rest.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectLink project={project} className="group block">
                <div className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-bg-surface">
                    <img
                      src={project.image}
                      alt={`${project.name}, ${project.tag}`}
                      loading="lazy"
                      width="600"
                      height="450"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <span className="text-caption text-text-muted font-sans tracking-[0.04em]">
                    {project.role} · {project.tag} · {project.year}
                  </span>
                  <h3 className={`font-serif text-heading mt-2 transition-colors duration-300${
                    project.link !== '#' ? ' group-hover:text-accent' : ''
                  }`}>
                    {project.name}
                  </h3>
                  <p className="text-small text-text-secondary mt-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </ProjectLink>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
