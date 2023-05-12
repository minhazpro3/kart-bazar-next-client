import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

const Contact_form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <div className="container_signup_component">
    <div>
      <div className="signup_component">
        {/* signup image */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="signup_img">
            <Image
              src="https://i.ibb.co/mX3wQDJ/sign-up.png"
              alt="signup"
              fill
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: " rgba(241, 235, 235, 0.686)",
            padding: "20px",
          }}
        >
          {/* signup form */}
          <div className="inputs_group">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_title">
                <h2>Welcome To Kart Bazar</h2>
                <h5>Create a new account</h5>
              </div>
              {/* input group 1 */}
              <div className="input_group">
                <input
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                  })}
                  name="name"
                  required
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {/* {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )} */}
                <label for="name">Full Name</label>
              </div>
              {/* input group 2 */}
              <div className="input_group">
                <input
                  {...register("email", { pattern: /^[A-Za-z]+$/i })}
                  name="email"
                  required
                />
                <label for="email">Email Address</label>
              </div>
              {/* input group 3 */}
              <div className="input_group">
                <input
                  type="password"
                  {...register("age", { min: 18, max: 99 })}
                  name="password"
                  required
                />
                <label for="password">Password</label>
              </div>
              {/* input group 4 */}
              <div className="input_group">
                <input
                  type="password"
                  {...register("age", { min: 18, max: 99 })}
                  name="confirm password"
                  required
                />
                <label for="confirm password">Confirm Password</label>
              </div>
              {/* input group 5 */}
              <div className="terms_condition">
                <label>
                  <input
                    style={{ color: "green" }}
                    type="checkbox"
                    required
                  />{" "}
                  I agree with <span>Terms</span> and <span>Privacy</span>
                </label>
              </div>
              <input type="submit" className="button" value="Signup" />
            </form>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="third_auth">
              <ul>
                <hr />
                <span>OR</span>
              </ul>
              <button className="third_button">
                {" "}
                <FcGoogle style={{ margin: "0 6px " }} /> Sign up with
                Google{" "}
              </button>
              <button className="third_button">
                {" "}
                <BsFacebook
                  style={{ margin: "0 6px ", color: "blue" }}
                />{" "}
                Sign up with Facebook{" "}
              </button>
              <h5>
                Already have an account?
                <span>
                  {" "}
                  <Link href="/auth/signin">Login</Link>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact_form