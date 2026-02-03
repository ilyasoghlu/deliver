import { getOurTeam } from "@/lib/team";
import TeamCard from "@/components/team/TeamCard";

export default async function TeamPage() {
  const team = await getOurTeam();

  return (
    <section>
      {team.map((member) => (
        <TeamCard
          key={member.id}
          member={member}
        />
      ))}
    </section>
  );
}
