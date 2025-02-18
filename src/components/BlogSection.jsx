import { blogs } from "../data/blogs"


function BlogSection() {
    return (
        <div>
            <div className="w-full text-center mb-16 font-medium text-lg">Our Blogs</div>
            <div className="grid grid-cols-3 gap-4">
                {blogs.map((blog) => {
                    return <div key={blog.title} className="flex flex-col justify-between gap-6 border-gray-300 border-[0.5px] rounded-lg p-3">
                        <div className="flex flex-col gap-6">
                            {blog.thumbnail}
                            <p className="font-medium text-lg">{blog.title}</p>
                        </div>
                        <p className="text-base">{blog.description}</p>
                        <button className="bg-[#041D56] text-white p-1 rounded-sm">Read</button>
                    </div>
                })}
            </div>
            <p className="font-normal cursor-pointer mt-16 text-center">Show More</p>
        </div>
    )
}

export default BlogSection