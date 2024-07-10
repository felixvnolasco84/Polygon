import Image, { StaticImageData } from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import TipTapOnlyContent from "@/components/TipTapOnlyContent/TipTapOnlyContent";
import GridBlogsRecommendations from "@/components/Grid/GridBlogsRecommendations";
import { blogs } from "@/lib/utils";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  console.log;
  const post = blogs.find((post: any) => post.slug === slug);

  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://www.polygonag.com/blog/${post?.slug}`,
    },
  };
}

export default function page({ params }: { params: { slug: string } }) {
  const post = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div className="mx-auto my-12 flex max-w-5xl flex-col gap-12 px-4">
      <div className="flex flex-col gap-2">
        <div className="relative aspect-square h-48 w-full overflow-hidden rounded-md shadow-sm lg:h-64">
          <Image
            src={post?.image as StaticImageData}
            layout="fill"
            objectFit="cover"
            alt="Blog Image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 flex h-full w-full items-end bg-gradient-to-t from-[#0000007a] from-10% to-transparent">
            <h1 className="p-4 text-2xl text-white lg:p-8">{post?.title}</h1>
          </div>
        </div>
        <TipTapOnlyContent content={post?.content as string} />
      </div>
      <GridBlogsRecommendations currentBlog={params.slug} />
    </div>
  );
}
