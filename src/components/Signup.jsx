import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
           
            <h3 className="font-bold text-lg">Signup!</h3>
            <div className="w-96 mt-10 space-y-3">
              <span>Name</span>
              <br />
              <input
                type="Name"
                placeholder="Enter your Name"
                className="w-80 px-3 py-2 outline-none border rounded-md"
                {...register("Name", { required: true })}
              />
             <br />
              {errors.Name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-96 mt-5 space-y-3">
              <span>email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 outline-none border rounded-md"
                {...register("email", { required: true })}
              />
               <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-96 mt-5 space-y-3">
              <span>password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 outline-none border rounded-md"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-around mt-5">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                <button
                  className="underline text-blue-800 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
