import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14Pro Max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          quo, ea minus qui beatae aliquid natus incidunt sit. Veniam,
          voluptatum. Quis numquam nemo magnam similique distinctio provident
          alias maiores, error magni molestiae perferendis, sit inventore
          debitis architecto hic facere nihil quo minus iure soluta deserunt
          iusto odio consequuntur suscipit. Rerum, reprehenderit necessitatibus!
          Dolor libero minus sit fuga illum, omnis maxime, reprehenderit,
          aperiam labore placeat iste adipisci et similique nulla provident
          dolore quod? Aliquam excepturi provident mollitia quam, quos id
          assumenda dolorem, fugit sunt dolorum non dignissimos, a reprehenderit
          modi facere ullam at? Repellat ab, delectus odit totam vero inventore
          quisquam aperiam molestiae aspernatur? Recusandae voluptatibus numquam
          autem beatae tempore quas dolorem adipisci suscipit iusto veniam esse
          aspernatur quis nemo ducimus, dolore mollitia commodi! Impedit dolorem
          sunt molestias vero nam est commodi, nisi tenetur, explicabo accusamus
          voluptatem laudantium earum omnis obcaecati? Illo perspiciatis iure
          eum animi laborum voluptates cumque enim at!
        </p>
        <div className="flex justify-between py-2">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 Sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
