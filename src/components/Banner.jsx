import Bannerr1 from "../../public/Bannerr.jpg/Bannerr.jpg"

const Banner = () => {
  return (
    <> 
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        <div className="mr-32 w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-40">
          <div className="space-y-12">  
            <h1 className="text-4xl font-bold">
              Hello,Welcome here to learn something new{" "}
              <span className="text-pink-700">everyday!!!</span>{" "}
            </h1>
            <p className="text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type sp ecimen book.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            </div>
            <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2">
            <img src={Bannerr1} className="ml-36 w-92 h-92" alt=""/>
        </div>
      </div>
    </>
  );
};

export default Banner;
