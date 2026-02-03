import { getTeamMember } from "@/lib/team";

export default async function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = await getTeamMember(params.id);

  if (!member) return <p>Not found</p>;

  return (
    <div>
      <h1>
        {member.firstName} {member.lastName}
      </h1>
      <p>{member.position}</p>
    </div>
  );
}
