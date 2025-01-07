import Image from 'next/image'

const blogPosts = [
  {
    title: "Design conferences in 2024",
    category: "Design",
    date: "Feb 23, 2024",
    image: "/next.svg",
    excerpt: "In 2024, several exciting design conferences are set to take place, offering opportunities for professionals and enthusiasts to connect, learn, and share innovative ideas."
  },
  {
    title: "Best fonts every designer",
    category: "Design",
    date: "Jan 29, 2024",
    image: "/next.svg",
    excerpt: "When it comes to typography, choosing the right font is essential for effective design. In this article, I'll bring a brief overview of some of the best fonts that every designer should consider incorporating into their toolkit."
  },
  {
    title: "Design digest #80",
    category: "Design",
    date: "Dec 20, 2023",
    image: "/next.svg",
    excerpt: "Hello, my friends. In this Design Digest, I'll show you a curated collection of the latest trends, insights, and innovations in the design world. This edition highlights key themes and discussions that are shaping the future of design."
  }
]

export default function Blog() {
  return (
    <section className="bg-eerie-black2 border border-jet rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-white2 mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

function BlogPost({ title, category, date, image, excerpt }: {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}) {
  return (
    <article className="bg-eerie-black1 rounded-2xl overflow-hidden">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center text-xs text-light-gray70 mb-2">
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-medium text-white2 mb-2">{title}</h3>
        <p className="text-sm text-light-gray line-clamp-3">{excerpt}</p>
      </div>
    </article>
  )
}
