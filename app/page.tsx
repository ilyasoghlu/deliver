
import SectionTitle from "@/components/global/SectionTitle"
import {Separator } from '@/components/ui/separator'
import Card from "@/components/global/Card";
import { Button } from "@/components/ui/button";
import { Hero, HeroCarousel, FeaturedProducts } from "@/components/home";




function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SectionTitle text="this is home page" />
      <Separator />
      <FeaturedProducts>
        <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
          <SectionTitle text="we are small team doing big things!" />
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
        </div>
        <Separator />
        <div className="flex flex-row flex-wrap items-center justify-between py-8">
          <Card />
          <Card />
          <Card />
        </div>
      </FeaturedProducts>
      <FeaturedProducts>
        <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
          <SectionTitle text="Some of our latest works" />
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between py-8">
          <Card />
          <Card />
          <Card />
        </div>
      </FeaturedProducts>
      <Separator />
      <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
        <SectionTitle text="do you like what you see?" />
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
        <Button
          type="button"
          variant="outline"
          className="bg-emerald-300 uppercase text-white my-6 py-4"
        >
          purchase
        </Button>
      </div>
    </div>
  );
}

export default HomePage