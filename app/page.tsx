
import SectionTitle from "@/components/global/SectionTitle"
import {Separator } from '@/components/ui/separator'
import Card from "@/components/global/Card";
import { Button } from "@/components/ui/button";
import { Hero, HeroCarousel, FeaturedContent } from "@/components/home";
import { OfferContent } from "@/components/global";




function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SectionTitle text="this is home page" />
      <Separator />
      {/* Featured Services */}
      <FeaturedContent text="we are small team doing big things!" />
      {/* Featured Works */}
      <FeaturedContent text="Some of our latest works" />
      {/* Offer Block */}
      <OfferContent text="do you like what you see?">
        <Button
            type="button"
            variant="outline"
            className="bg-emerald-300 uppercase text-white my-6 py-4"
          >
            purchase
          </Button>
        </OfferContent> 
      
    </div>
  );
}

export default HomePage