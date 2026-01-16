import OurTeam from "@/components/about/OurTeamContainer";
import { OfferContent, SectionTitle } from "@/components/global";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
// import { fetchOurTeam } from "@/utils/actions";
// import { OurTeam as OurTeamType } from "@prisma/client";

async function AboutPage() {
  // Fetch all team members
  // const team:OurTeamType[] = await fetchOurTeam();

  return (
    <div>
      {/* Intro Section */}
      <div className="flex flex-col flex-wrap items-center justify-between sm:justify-center py-12 text-center text-muted-foreground">
        {/* Title elemet  */}
        <SectionTitle text="we are a small team doing big things!" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis quo, aut assumenda totam cum commodi reprehenderit similique minus! Aut.</p>
      </div>
      <Separator />

      {/* Mission / Values / Why Choose Us */}
      <div className="flex sm:flex-row sm:justify-between flex-col justify-center items-center py-12 gap-12 text-muted-foreground">
        <article className="sm:w-1/3 w-full">
          <h5 className="uppercase font-bold mb-6">mission statement</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </article>
        <article className="sm:w-1/3 w-full">
          <h5 className="uppercase font-bold mb-6">core values</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </article>
        <article className="sm:w-1/3 w-full">
          <h5 className="uppercase font-bold mb-6">why choose us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </article>
      </div>

      {/* Team Section */}
      <div className="flex flex-col text-center text-muted-foreground py-8">
        <div>
          {/* Section Title  */}
          <SectionTitle text="meet our team" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        {/* Team section  */}
        <div className="flex flex-row">
          {/* <OurTeam team={team} /> */}
        </div>
      </div>

      {/* Call-to-Action */}
      <OfferContent text="if you like what you see, join us!">
        <Button
          type="button"
          variant="outline"
          className="bg-emerald-300 uppercase text-white my-6 py-4"
        >
          apply now
        </Button>
      </OfferContent>
    </div>
  );
}

export default AboutPage;
