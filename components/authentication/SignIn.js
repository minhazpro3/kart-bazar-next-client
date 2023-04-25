import React from "react";
import { useForm } from "react-hook-form";
import Head_cos from "./../share/Head_cos";
import Image from "next/image";
import Cart_banner from "../cart/Cart_banner";
import Footer from "./../share/Footer";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Head_cos />
      <div className="cart_main_banner">
        <div className="cart_main_banner_container">
          <Cart_banner />
        </div>
      </div>

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
                    <h5>Sign in your account</h5>
                  </div>
                  {/* input group 1 */}
                  
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

                  {/* terms & condition */}
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
                  {/* signin button */}
                  <input type="submit" className="button" value="Signup" />
                </form>
              </div>
              {/*  */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="third_auth">
                  <ul>
                    <hr />
                    <span>OR</span>
                  </ul>

                  <h5>
                    If you new user?
                    <span>
                      {" "}
                      <Link href="/auth/signup">Signup</Link>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#051616" }}>
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
