
import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = getBlogById(id);
    if (!blog) {
        notFound()
    }

    return (
        <div className="flex">
            <div className="flex flex-col mx-auto p-5 border border-gray-200 rounded-2xl shadow-md">
                <h1 className="text-2xl text-cyan-700"> {blog?.title} </h1>
                <a href="#" className="italic text-xl text-slate-700 hover:text-slate-500 transition-colors"> {blog.url} </a>
                <div className="flex gap-2 text-xl mt-5">
                    <span className="text-slate-700">By</span>
                    <p className="text-lime-700"> {blog.author} </p>
                    <span className="text-gray-300">{" | "}</span>
                    <p className="text-slate-700"> {blog.likes} likes </p>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
