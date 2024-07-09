import React, { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { FormInput } from "../components";

// background video
import BgVideo from "../videos/kitchen-bg-vid2.mp4"

import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");

  return { email, password, displayName, photoURL };
};

function Register() {
  const userData = useActionData();
  const { register, isPending, registerWithGoogle } = useRegister();

  useEffect(() => {
    if (userData) {
      register(
        userData.email,
        userData.password,
        userData.displayName,
        userData.photoURL
      );
    }
  }, [userData]);
  return (
    <div className="h-screen grid place-items-center top-0">
      <video className="w-full h-screen object-cover absolute " src={BgVideo} autoPlay loop muted />
      <div className="card bg-[#ffffffb7] w-96 shadow-xl ">
        <div
          className="card bg-base-100 w-96 shadow-xl px-8 pb-3 pt-3"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        >
          <Form method="post" className="flex flex-col items-center gap-3">
            <h1 className="text-3xl mb-[-10px] mt-[-10px]font-semibold">Register</h1>
            <FormInput className="" type="text" label="displayName" name="displayName" />
            <FormInput className="" type="url" label="photoURL" name="photoURL" />
            <FormInput className="" type="email" label="email" name="email" />
            <FormInput className="" type="password" label="password" name="password" />
            <div className="w-full">
              {!isPending && (
                <button className="btn btn-primary btn-block">Register</button>
              )}
              {isPending && (
                <button disabled className="btn btn-primary btn-block">
                  Loading...
                </button>
              )}
            </div>
          </Form>
          {isPending && <div className="w-full mt-5">
            <button disabled onClick={registerWithGoogle} className="btn btn-accent btn-block text-white">
              Loading...
            </button>
          </div>}
          {!isPending && <div className="w-full mt-5">
            <button onClick={registerWithGoogle} className="btn mt-[-10px] btn-accent btn-block text-white">
              Google{" "}
            </button>
          </div>}
          <div className="text-center mt-3">
            If you have account, <Link className="text-black underline" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;