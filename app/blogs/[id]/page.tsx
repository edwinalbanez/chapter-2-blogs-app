
import { incrementBlogLikes } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentProps } from "react";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = getBlogById(id);
    if (!blog) {
        notFound()
    }

    return (
        <div className="flex">
            <div className="flex flex-col mx-auto p-5 border border-gray-200 rounded-2xl shadow-md">
                <Link href={"/blogs"} className="w-fit mb-2.5 cursor-pointer hover:underline text-slate-500/90 hover:text-slate-600">
                    {"< back"}
                </Link>
                <h1 className="text-2xl text-cyan-700"> {blog?.title} </h1>
                <a href="#" className="italic text-xl w-fit text-slate-700 hover:text-slate-500 transition-colors">
                    {blog.url}
                </a>

                <div className="flex gap-2 text-xl mt-6">
                    <span className="text-slate-700">By</span>
                    <p className="text-lime-700"> {blog.author} </p>
                    <span className="text-gray-300">{" | "}</span>

                    <div className="flex gap-2">
                        <p className="text-slate-700"> {blog.likes} likes </p>
                        <form action={incrementBlogLikes}>
                            <input type="text" name="id" value={blog.id} className="hidden" />
                            <button type="submit">
                                <LikeIcon className="hover:text-cyan-700 size-6 cursor-pointer"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;


function LikeIcon({...props}: ComponentProps<"svg">) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
    )
}
