// useEffect
import { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";

// components
import { FormInput } from "../components";

// backgroun video
import BgVideo from "../videos/kitchen-bg-vid2.mp4"

// hook
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { loginUser, isPending, } = useLogin();
  const { isPending: isPendingUseRegister, registerWithGoogle } = useRegister();

  useEffect(() => {
    if (userData) {
      loginUser(userData.email, userData.password);
    }
  }, [userData]);

  return (
    <div className="h-screen grid place-items-center top-0">
      <video className="w-full h-screen object-cover absolute " src={BgVideo} autoPlay loop muted />
      <div className="h-full lg:bg-none bg-cover grid place-items-center">
        <div className="card bg-[#ffffffb7] w-96 shadow-xl  p-8">
          <Form method="post" className="flex flex-col items-center gap-5">
            <h1 className="text-3xl font-semibold">Login</h1>
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <div className="w-full">
              <button className="btn btn-primary btn-block">Login</button>
            </div>
          </Form>
          {isPendingUseRegister && <div className="w-full mt-5">
            <button disabled onClick={registerWithGoogle} className="btn btn-accent btn-block text-white">
              <span className="loading loading-spinner loading-sm"></span>
            </button>
          </div>}
          {!isPendingUseRegister && <div className="w-full mt-5">
            <button onClick={registerWithGoogle} className="btn btn-accent btn-block text-white">
              Google{" "}
            </button>
          </div>}
          <div className="text-center mt-3">
            If you don't have account, <Link className="text-black underline" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;