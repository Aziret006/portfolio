import Image from "next/image";
import { Eye } from "lucide-react";

const projects = [
  {
    title: "Finance",
    category: "Web Development",
    image: "/next.svg",
  },
  {
    title: "Orizon",
    category: "Web Development",
    image: "/next.svg",
  },
  {
    title: "Fundo",
    category: "Web Design",
    image: "/next.svg",
  },
  {
    title: "Brawlhalla",
    category: "Applications",
    image: "/next.svg",
  },
  {
    title: "DSM.",
    category: "Web Design",
    image: "/next.svg",
  },
  {
    title: "Metaspark",
    category: "Web Design",
    image: "/next.svg",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-eerie-black2 border border-jet rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white2 mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Eye className="text-orange-yellow-crayola mb-2" size={32} />
        <h3 className="text-lg font-medium text-white2">{title}</h3>
        <p className="text-sm text-light-gray">{category}</p>
      </div>
    </div>
  );
}
