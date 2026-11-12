import Link from "next/link";
import { getBlogs } from "../services/blogs";

export default function Blogs(){

  const blogs = getBlogs();
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
    const {id, author, title, likes} = blog;

    return(
      <Link href={`/blogs/${id}`} className="group flex flex-col border-b border-slate-300 my-4 p-3 cursor-pointer transition-colors">
          <p className="text-2xl text-cyan-700 group-hover:text-cyan-600 transition-colors"> {title} </p>
          <p className="text-lime-600 group-hover:text-lime-500 transition-colors"> {author} </p>
          <p className="text-slate-700"> {likes} likes </p>
      </Link>
    )
}

