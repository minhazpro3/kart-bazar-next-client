import React from "react";
import { useForm } from "react-hook-form";
import Head_cos from "./../share/Head_cos";
import Image from "next/image";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Head_cos />
      <div className="container_signup_component">
        <div>
          <div className="signup_component">
            <div className="signup_img">
              <Image
                src="https://i.ibb.co/mX3wQDJ/sign-up.png"
                alt="signup"
                fill
              />
            </div>
            <div className="inputs_group">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input_group">
                  <input
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {/* {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )} */}
                  <label>Full Name</label>
                </div>
                <div className="input_group">
                  <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                  <label>Email Address</label>
                </div>
                <div className="input_group">
                  <input
                    type="number"
                    {...register("age", { min: 18, max: 99 })}
                  />
                  <label>Password</label>
                </div>
                <div className="input_group">
                  <input
                    type="number"
                    {...register("age", { min: 18, max: 99 })}
                  />
                  <label>Confirm Password</label>
                </div>
                <div className="terms_condition">
                  <label>
                    <input type="checkbox" required /> I agree with Terms and
                    Privacy{" "}
                  </label>
                </div>
                <input type="submit" className="button" value="Signup" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
