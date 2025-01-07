import Image from "next/image";
import {
  Mail,
  PhoneIcon as PhonePortrait,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-eerie-black2 border border-jet rounded-3xl p-6 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center">
        <Image
          src="/next.svg"
          alt="Richard Hanrick"
          width={150}
          height={150}
          className="rounded-3xl"
        />
        <h1 className="text-2xl font-medium text-white2 mt-4">
          Richard Hanrick
        </h1>
        <p className="text-sm bg-onyx px-3 py-1 rounded-lg mt-2">
          Web Developer
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <ContactItem icon={Mail} title="Email" info="richard@example.com" />
        <ContactItem
          icon={PhonePortrait}
          title="Phone"
          info="+1 (213) 352-2795"
        />
        <ContactItem icon={Calendar} title="Birthday" info="June 23, 1982" />
        <ContactItem
          icon={MapPin}
          title="Location"
          info="Sacramento, California, USA"
        />
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <SocialIcon href="#" icon="logo-facebook" />
        <SocialIcon href="#" icon="logo-twitter" />
        <SocialIcon href="#" icon="logo-instagram" />
      </div>
    </aside>
  );
}

function ContactItem({
  icon: Icon,
  title,
  info,
}: {
  icon: any;
  title: string;
  info: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-onyx w-10 h-10 rounded-lg flex items-center justify-center text-orange-yellow-crayola">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-light-gray70 uppercase">{title}</p>
        <p className="text-sm">{info}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <a href={href} className="text-light-gray70 hover:text-light-gray">
      <ion-icon name={icon} size="large"></ion-icon>
    </a>
  );
}
