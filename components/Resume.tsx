import { Book, Briefcase } from 'lucide-react'

const education = [
  {
    title: "University school of the arts",
    period: "2008 - 2010",
    description: "There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing."
  },
  {
    title: "New York Academy of Art",
    period: "2006 - 2007",
    description: "I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to increase my career prospects in a competitive job market."
  },
  {
    title: "High School of Art and Design",
    period: "2003 - 2005",
    description: "There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems."
  }
]

const experience = [
  {
    title: "Creative director",
    period: "2015 - Present",
    description: "I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals."
  },
  {
    title: "Art director",
    period: "2013 - 2015",
    description: "I create and develop visual concepts that align with the project's goals and objectives, supervising the design process and managing timelines and budgets for design projects."
  },
  {
    title: "Web designer",
    period: "2010 - 2013",
    description: "I create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience."
  }
]

const skills = [
  { name: "Web Design", level: 80 },
  { name: "Graphic Design", level: 70 },
  { name: "Branding", level: 90 },
  { name: "WordPress", level: 50 }
]

export default function Resume() {
  return (
    <section className="bg-eerie-black2 border border-jet rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white2 mb-6">Resume</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white2 mb-4 flex items-center">
          <Book className="mr-2" /> Education
        </h3>
        {education.map((item, index) => (
          <ResumeItem key={index} {...item} />
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white2 mb-4 flex items-center">
          <Briefcase className="mr-2" /> Experience
        </h3>
        {experience.map((item, index) => (
          <ResumeItem key={index} {...item} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white2 mb-4">My Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ResumeItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-medium text-white2">{title}</h4>
      <p className="text-sm text-orange-yellow-crayola mb-2">{period}</p>
      <p className="text-sm text-light-gray">{description}</p>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white2">{name}</span>
        <span className="text-sm font-medium text-white2">{level}%</span>
      </div>
      <div className="w-full bg-jet rounded-full h-2.5">
        <div className="bg-orange-yellow-crayola h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

