import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Cart_banner = () => {
  const router = useRouter();
  return (
    <div>
      <div className="cart_banner_component">
        <h3> {router.pathname.slice(1)}</h3>
        <h3>
          <Link href="/">
            {" "}
            <AiFillHome />
          </Link>{" "}
          <FiChevronRight />
          <span> {router.pathname.slice(1)}</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart_banner;
