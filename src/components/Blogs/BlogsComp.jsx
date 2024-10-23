import Img3 from "../../assets/blog/agri_app.png";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/local.png";
import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Training Entrepreneurs",
    description:
      "“The training program has been instrumental in empowering entrepreneurs. The insights and skills gained have helped many navigate the complexities of starting and running a business successfully. We are proud to support budding entrepreneurs on their journey.”",
  },
  {
    id: 2,
    image: Img2,
    title: "Health and Wellness Initiatives",
    description:
      "“Our health initiatives have significantly improved community well-being. By providing access to essential health services and education, we’re helping individuals lead healthier lives and make informed health choices.”",
  },
  {
    id: 3,
    image: Img3,
    title: "AgriConnect App",
    description:
      "“AgriConnect has transformed the way we manage our agricultural operations. With real-time insights and analytics, we're able to make informed decisions that enhance productivity and sustainability. This app is a game changer for modern farming.”",
    customWidth: "w-1/2", // Set custom width for the third image
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
