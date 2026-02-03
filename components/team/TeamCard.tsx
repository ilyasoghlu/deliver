import { OurTeam, Experience, Project, Skill } from "@prisma/client";

type Props = {
  member: OurTeam & {
    experiences: Experience[];
    projects: Project[];
    skills: Skill[];
  };
};

export default function TeamCard({ member }: Props) {
  return (
    <div>
      <h3>
        {member.firstName} {member.lastName}
      </h3>
      <p>{member.position}</p>

      {member.experiences.length > 0 && (
        <div>
          <h4>Experience</h4>
          {member.experiences.map((exp) => (
            <p key={exp.id}>
              {exp.title} – {exp.company}
            </p>
          ))}
        </div>
      )}

      {member.skills.length > 0 && (
        <div>
          <h4>Skills</h4>
          {member.skills.map((skill) => (
            <span key={skill.id}>{skill.title}</span>
          ))}
        </div>
      )}
    </div>
  );
}
