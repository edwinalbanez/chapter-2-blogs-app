import { createBlog } from "@/app/actions/blogs";
import { ComponentProps } from "react";

export default function Create() {
    return (
        <div className="max-w-[50%] mx-auto">
            <form action={createBlog} className="flex flex-col gap-3">
                <h1 className="text-xl text-cyan-700 text-center">Create new blog</h1>
                <Field label="Title" name="title" />
                <Field label="Author" name="author" />
                <Field label="Url" name="url" />

                <div className="flex gap-4 mx-auto">
                    <button type="submit" className="p-2 bg-cyan-700 text-white rounded-lg cursor-pointer">
                        Create
                    </button>
                    <button type="reset" className="bg-slate-100 border border-slate-200 p-2 rounded-lg cursor-pointer">
                        Clear all
                    </button>
                </div>

            </form>
        </div>
    );
}

function Field({ label, ...props }: ComponentProps<"input"> & { label: string }) {
    return (
        <label className="flex flex-col">
            {label}
            <input
                type="text"
                autoComplete="off"
                required
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-lime-600"
                {...props}
            />
        </label>
    );
}
