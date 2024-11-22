import Brand1 from "../../assets/brands/edi.jpeg";
import Brand2 from "../../assets/brands/image.png";

const BrandsLogo = () => {
  return (
    <div className="container mb-12 mt-12 sm:mt-0 px-4">
      <h1 className="text-center text-3xl font-semibold mb-6">
        Powering Next-Gen Companies
      </h1>
      <div className="py-6 md:px-32 flex flex-wrap items-center justify-start gap-6 sm:gap-3 md:gap-8">
        {/* Brands Logos */}
        <div className="flex justify-center items-center w-28 sm:w-24">
          <img
            src={Brand1}
            alt="Brand 1"
            className="w-full h-auto object-contain transition-transform transform hover:scale-110"
          />
        </div>
        <div className="flex justify-center items-center w-24 sm:w-20">
          <img
            src={Brand2}
            alt="Brand 2"
            className="w-full h-auto object-contain transition-transform transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandsLogo;
