import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

//   console.log(page);
  return (
    <div>
      <h1 className="bg-gradient-to-r text-transparent px-4 py-2 bg-clip-text  from-orange-500 via-red-500 to-yellow-400 text-7xl font-extrabold">
        {page.title}
      </h1>

      <div className="text-lg  mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
