export default function Blogs(){
    return(
        <div className="flex flex-col max-w-5xl mx-auto">
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

type Blog = {
    id: string;
    author: string;
    title: string;
    url: string;
    likes: number;
}

function BlogCard({ blog } : { blog: Blog }){
    const {author, title, url, likes} = blog;

    return(
      <div className="group flex flex-col border-b border-slate-300 my-4 p-3 cursor-pointer transition-colors">
          <p className="text-2xl text-cyan-600 group-hover:text-cyan-700 transition-colors"> {title} </p>
          <p className="text-lime-600 group-hover:text-lime-700 transition-colors"> {author} </p>
          <p className="text-slate-700"> {likes} likes </p>
      </div>
    )
}

const blogs = [
  {
    id: "3e2b1a4f-5c6d-4e7f-8a9b-0c1d2e3f4a5b",
    title: "Mastering TypeScript: From Beginner to Advanced",
    author: "Sarah Jenkins",
    url: "https://devinsights.com",
    likes: 342
  },
  {
    id: "7f8e9d0c-1b2a-3f4e-5d6c-7b8a9e0f1a2b",
    title: "10 CSS Tricks Every Front-End Developer Should Know",
    author: "Alex Rivera",
    url: "https://webcraft.io",
    likes: 512
  },
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    title: "Building Scalable Microservices with Go",
    author: "Kenji Takahashi",
    url: "https://techpulse.blog",
    likes: 189
  },
  {
    id: "b7c8d9e0-f1a2-3b4c-5d6e-7f8a9b0c1d2e",
    title: "A Complete Guide to Next.js App Router",
    author: "Emily Watson",
    url: "https://nextgenweb.dev",
    likes: 423
  },
  {
    id: "c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
    title: "Understanding Database Indexing for Better Performance",
    author: "Michael Chang",
    url: "https://dbqueries.com",
    likes: 275
  },
  {
    id: "d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a",
    title: "How to Secure Your REST APIs",
    author: "Jessica Taylor",
    url: "https://cyberguard.blog",
    likes: 198
  },
  {
    id: "e5f67a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
    title: "Introduction to Docker and Containerization",
    author: "David Miller",
    url: "https://cloudbasics.net",
    likes: 311
  },
  {
    id: "f1a23b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
    title: "Clean Code Practices in Python",
    author: "Sophia Martinez",
    url: "https://pythontips.dev",
    likes: 645
  }
];