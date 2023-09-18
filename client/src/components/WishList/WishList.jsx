import React from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { useState } from "react";

const WishList = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Iphone 14Pro MAX 256gb ssd and 85b ram silver colour",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14Pro MAX 256gb ssd and 85b ram silver colour",
      description: "test",
      price: 711,
    },
    {
      name: "Iphone 14Pro MAX 256gb ssd and 85b ram silver colour",
      description: "test",
      price: 800,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-end w-full pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart single items */}
          <br />
          <div className="w-full border-t">
            {cartData.map((i, index) => (
              <CartSingle key={index} data={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="p-4 border-b">
      <div className="flex items-center w-full">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default WishList;
