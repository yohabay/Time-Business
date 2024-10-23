import Brand1 from "../../assets/brands/edi.jpeg";
import Brand2 from "../../assets/brands/image.png";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-0">
        <h1 className="text-center">Powering next-gen companies</h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src={Brand1} alt="" width={100} />
          <img src={Brand2} alt="" width={100} />
          <img src={Brand1} alt="" width={100} />
          <img src={Brand2} alt="" width={100} />
          <img src={Brand2} alt="" width={100} />
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
