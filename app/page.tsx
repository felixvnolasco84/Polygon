import Grid from "@/components/Grid/GridTeamMembers";
import Slider from "@/components/Slider/Slider";

import SliderHome from "@/components/Slider/SliderHome";
import GridFeaturedWork from "@/components/Grid/GridFeaturedWork";
import GridProjects from "@/components/Grid/GridProjects";
import CTABrainstorming from "@/components/CTA/CTABrainstorming";
import NewGridClients from "@/components/Grid/NewGridClients";
import { clients, firstProjects, secondProjects } from "@/lib/utils";
import { members } from "@/lib/members";
import CTAHeroSection from "@/components/Grid/CTAHeroSection";
import NewGridServices from "@/components/Grid/NewGridServices";
import NewGridBlogs from "@/components/Grid/NewGridBlogs";
import GridFeaturedWorkTuborg from "@/components/Grid/GridFeaturedWorkTuborg";

export default function Home() {
  return (
    <main className="bg-gray-[#FDFDFD] flex flex-col items-center justify-between gap-y-16 py-12 lg:gap-y-24 lg:py-24 xl:gap-y-48">
      <div className="container flex w-full flex-col gap-12 px-4 xl:gap-24">
        <CTAHeroSection />
        <NewGridServices />
        {/* <SliderHome /> */}
        <GridFeaturedWork />
        <GridProjects projects={firstProjects} />
        <CTABrainstorming />
        <GridFeaturedWorkTuborg />
        <GridProjects projects={secondProjects} />
        <NewGridClients items={clients} />
        <Grid items={members} />
        <NewGridBlogs />
        {/* <Slider /> */}
      </div>
    </main>
  );
}
