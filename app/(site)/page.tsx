import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const project = await getProjects();

  // console.log(project);
  return (
    <div >
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r text-transparent px-4 py-2 bg-clip-text  from-orange-500 via-red-500 to-yellow-400">
          Roneil
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-700">
        Aloha Everyone! Check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-800 text-3xl">My Projects</h2>
      <div className="mt-4=5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className=" rounded-lg py-4 hover:scale-105 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg "
              />
            )}
            <div className="font-extrabold bg-gradient-to-r text-transparent px-4 py-2 bg-clip-text  from-orange-500 via-red-500 to-yellow-400">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
