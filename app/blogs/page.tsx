import Link from "next/link";
import { getBlogs } from "../services/blogs";
import { ComponentProps } from "react";
import { searchBlog } from "../actions/blogs";

const Blogs = async ({ searchParams }: { searchParams: Promise<{ filter: string }> }) => {
    const { filter } = await searchParams;
    const blogs = getBlogs();

    const blogsToShow = blogs.filter(blog => blog.title
        .toLocaleLowerCase()
        .includes(filter ? filter.toLocaleLowerCase() : "")
    )

    return (
        <div className="flex flex-col max-w-5xl mx-auto">
            <h1 className="text-3xl text-cyan-950 mb-9 font-bold text-center">Blogs</h1>
            <Search className="mb-4" value={filter} />
            {blogsToShow.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

export default Blogs;

function Search({ value, className, ...props }: ComponentProps<"div"> & {value: string}) {
    return (
        <form action={searchBlog}>
            <div {...props} className={`flex w-2/5 gap-2 items-center px-3 ${className}`}>
                <input
                    type="text"
                    name="filter"
                    defaultValue={value}
                    autoComplete="off"
                    placeholder=" Blog title..."
                    className="border border-gray-400 w-full p-1.5 rounded-md focus:outline-cyan-800"
                />
                <button type="submit" className="cursor-pointer bg-cyan-900 text-white text-lg border border-slate-300 py-1 px-3 rounded-md ">
                    Search
                </button>
            </div>
        </form>
    )
}

type Blog = {
    id: string;
    author: string;
    title: string;
    url: string;
    likes: number;
}

function BlogCard({ blog }: { blog: Blog }) {
    const { id, author, title, likes } = blog;

    return (
        <Link href={`/blogs/${id}`} className="group flex flex-col border-b border-slate-300 my-4 p-3 cursor-pointer transition-colors">
            <p className="text-2xl text-cyan-800 group-hover:text-cyan-700 transition-colors">
                {title}
            </p>
            <p className="text-lime-600 group-hover:text-lime-500 transition-colors">
                {author}
            </p>
            <p className="text-slate-700">
                {likes} likes
            </p>
        </Link>
    )
}

