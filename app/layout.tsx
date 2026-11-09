import Link from "next/link"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh mx-auto max-w-7xl flex flex-col">
        <nav className="sticky top-0 bg-white flex border border-gray-300 p-3">
          <Link href="/" className="hover:text-cyan-600 transition-colors mr-16 font-bold text-xl">Blogs app</Link>
          
          <div className="my-auto">
            <Link href="/" className="hover:text-lime-500 transition-colors">Home</Link>
            <Separator/>
            <Link href="/blogs" className="hover:text-lime-500 transition-colors">Blogs</Link>
            <Separator/>
            <Link href="/blogs/new" className="hover:text-lime-500 transition-colors">Create</Link>
          </div>
        </nav>
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  )
}

function Separator(){
  return(
    <span className="text-gray-300 cursor-default select-none">{" | "}</span>
  )
}