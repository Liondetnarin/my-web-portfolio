import Link from "next/link";
import { skillGroups, skillItems, type SkillItem } from "@/lib/skills";
import type { Project } from "@/types";

function SkillIcon({ skill }: { skill: SkillItem }) {
  return (
    <span className="skills-overview__icon" aria-hidden="true">
      <img src={skill.icon} alt="" width={40} height={40} /> {/* eslint-disable-line @next/next/no-img-element */}
    </span>
  );
}

export default function SkillsArchitecture({ projects }: { projects: Project[] }) {
  return (
    <div className="skills-overview">
      <div className="skills-overview__intro">
        <p className="skills-overview__eyebrow">Stack overview</p>
        <p className="skills-overview__hint">Every tool, grouped by the kind of work it helps ship.</p>
      </div>

      <div className="skills-overview__groups">
        {skillGroups.map((group) => {
          const groupSkills = skillItems.filter((skill) => skill.group === group.id);

          return (
            <section key={group.id} className={`skills-overview__group skills-overview__group--${group.id}`}>
              <div className="skills-overview__group-heading">
                <span className="skills-overview__index">{group.shortName}</span>
                <div>
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skills-overview__items">
                {groupSkills.map((skill) => {
                  const relatedProjects = skill.projectSlugs
                    .map((slug) => projects.find((project) => project.slug === slug))
                    .filter((project): project is Project => Boolean(project));

                  return (
                    <article key={skill.id} className={`skills-overview__item${relatedProjects.length ? " has-work" : ""}`}>
                      <div className="skills-overview__item-main">
                        <SkillIcon skill={skill} />
                        <div>
                          <h4>{skill.name}</h4>
                          <p>{skill.description}</p>
                        </div>
                      </div>
                      {relatedProjects.length ? (
                        <div className="skills-overview__work">
                          <span>Used in</span>
                          <div>
                            {relatedProjects.map((project) => (
                              <Link key={project.slug} href={`/projects/${project.slug}`}>
                                {project.title}<span aria-hidden="true">↗</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
