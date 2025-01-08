import { Palette, Code, Smartphone, Camera } from "lucide-react";

export default function About() {
  return (
    <section className="bg-eerie-black2 border border-jet rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white2 mb-4">About me</h2>
      <p className="text-light-gray mb-6">
        Im Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
      </p>
      <h3 className="text-xl font-semibold text-white2 mb-4">What Im doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServiceItem
          icon={Palette}
          title="Web Design"
          description="The most modern and high-quality design made at a professional level."
        />
        <ServiceItem
          icon={Code}
          title="Web Development"
          description="High-quality development of sites at the professional level."
        />
        <ServiceItem
          icon={Smartphone}
          title="Mobile Apps"
          description="Professional development of applications for iOS and Android."
        />
        <ServiceItem
          icon={Camera}
          title="Photography"
          description="I make high-quality photos of any category at a professional level."
        />
      </div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
}

function ServiceItem({ icon: Icon, title, description }: ServiceItemProps) {
  return (
    <div className="bg-eerie-black1 rounded-2xl p-4 flex items-start space-x-4">
      <div className="bg-onyx w-12 h-12 rounded-lg flex items-center justify-center text-orange-yellow-crayola flex-shrink-0">
        <Icon size={24} />
      </div>

      <div>
        <h4 className="text-lg font-medium text-white2 mb-2">{title}</h4>
        <p className="text-sm text-light-gray">{description}</p>
      </div>
    </div>
  );
}
