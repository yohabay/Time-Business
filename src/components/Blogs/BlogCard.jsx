const BlogCard = ({ image, title, description, customWidth }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
      <div className="w-full h-[300px] rounded-md object-contain">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover" // Ensures the image covers the container fully
        />
      </div>
      <h2 className="text-xl font-semibold my-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400"></span>
      </div>
    </div>
  );
};

export default BlogCard;
