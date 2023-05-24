import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";


const Contact_form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container_contact_page">
      <div>
        <div className="contact_component">
          {/* contact image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="contact_img">
              <Image
                src="https://i.ibb.co/7WJJrmT/contact-us.png"
                alt="contact"
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
            <div className="inputs_group_contact">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_title_contact">
                  <h2>Contact US</h2>
                  <h5>Any kind of problem or Question write us</h5>
                </div>
                {/* input group 1 */}
                <label for="name">Full Name</label>
                <div className="input_group_contact">

                  <input
                    {...register("name", {
                      required: true,
                      maxLength: 20,
                    })}
                    name="name"
                    required
                    placeholder="Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />

                </div>

                {/* input group 2 */}
                <label for="email">Email Address</label>
                <div className="input_group_contact">
                  <input
                    {...register("email", { pattern: /^[A-Za-z]+$/i })}
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>

                {/* input group 3 */}
                <label for="message">Message</label>
                <div className="input_group_contact">
                  <textarea
                    type="text"
                    {...register("message", { min: 5, max: 150 })}
                    name="message"
                    placeholder="What is on your mind?"
                    required
                  />

                </div>


                <input type="submit" className="button" value="Send" />
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_form