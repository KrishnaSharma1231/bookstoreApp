import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Us!</h3>

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="w-96 mt-5 space-y-3">
              <span>Name</span>
              <br />
              <input
                type="Name"
                placeholder="Enter your name"
                className="w-96 px-3 py-3 outline-none border rounded-md"
                {...register("Name", { required: true })}
              />
              {errors.Name && (
                <span className="text-red-800">Name is required</span>
              )}
            </div>

            <div className="w-96 mt-5 space-y-3">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-96 px-2 py-3 outline-none border rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-800">Email is required</span>
              )}
            </div>
            <div className="w-96 mt-5 space-y-3">
              <span>Messsage</span>
              <br />
              <textarea
                type="message"
                placeholder="Enter your message"
                className="w-96 px-2 py-5 outline-none border rounded-md"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-red-800">This field is required</span>
              )}
            </div>
            <div className="mt-1 flex justify-around">
              <button
                className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
