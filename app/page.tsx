const Home = () => {
  console.log('hello next.js')
  return (
    <div className="text-center">
      <div>
        <h2 className="text-xl text-indigo-500">Chapter 2</h2>
        <div className="text-3xl">
          From single page apps to server side rendering
        </div>
        <div className="italic">
          An exercise for{" "}
          <a className="underline"  href="https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs">
            Full Stack Open Next.js
          </a>
        </div>
      </div>
      
    </div>
  )
}
export default Home



