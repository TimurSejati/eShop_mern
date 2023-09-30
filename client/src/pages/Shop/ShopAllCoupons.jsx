import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllProducts from "../../components/Shop/AllProducts";
import AllCoupons from "../../components/Shop/AllCoupons";

const ShopAllCoupons = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={9} />
        </div>
        <div className="flex justify-center w-full">
          <AllCoupons />
        </div>
      </div>
    </div>
  );
};

export default ShopAllCoupons;
