import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-eerie-black2 border border-jet rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white2 mb-6">Contact</h2>

      <div className="mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="rounded-2xl"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white2 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <ContactItem icon={MapPin} text="Sacramento, California, USA" />
            <ContactItem icon={Mail} text="richard@example.com" />
            <ContactItem icon={Phone} text="+1 (213) 352-2795" />
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white2 mb-4">
            Send a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-eerie-black1 text-light-gray rounded-lg p-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-eerie-black1 text-light-gray rounded-lg p-3"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-eerie-black1 text-light-gray rounded-lg p-3"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-yellow-crayola text-eerie-black2 font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

function ContactItem({ icon: Icon, text }: ContactItemProps) {
  return (
    <li className="flex items-center">
      <Icon className="text-orange-yellow-crayola mr-2" />
      <span className="text-light-gray">{text}</span>
    </li>
  );
}
