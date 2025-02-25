import GridFeaturedWork from "@/components/Grid/GridFeaturedWork";
import GridProjects from "@/components/Grid/GridProjects";
import CTABrainstorming from "@/components/CTA/CTABrainstorming";
import NewGridClients from "@/components/Grid/NewGridClients";
import { clients, firstProjects, secondProjects } from "@/lib/utils";
import CTAHeroSection from "@/components/Grid/CTAHeroSection";
import NewGridServices from "@/components/Grid/NewGridServices";
import NewGridBlogs from "@/components/Grid/NewGridBlogs";
import GridFeaturedWorkTuborg from "@/components/Grid/GridFeaturedWorkTuborg";

export default function Home() {
  return (
    <main className="bg-gray-[#FDFDFD] container flex w-full flex-col gap-12 px-4 py-10 lg:py-12 xl:gap-24 xl:py-16 2xl:py-20">
      <CTAHeroSection />
      <NewGridServices />
      <GridFeaturedWork />
      <GridProjects projects={firstProjects} />
      <CTABrainstorming />
      <GridFeaturedWorkTuborg />
      <GridProjects projects={secondProjects} />
      <NewGridClients items={clients} />
      <NewGridBlogs />
    </main>
  );
}
