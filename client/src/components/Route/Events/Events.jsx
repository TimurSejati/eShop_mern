import React from "react";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCard from "../ProductCard/ProductCard";
import EventCard from "./EventCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { blueGrey } from "@material-ui/core/colors";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  // useEffect(() => {
  //   const data =
  //     allEvents && allEvents.find((a, b) => (a.sold_out = b.sold_out));
  //   console.log(data);
  // }, [allEvents]);

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="grid w-full">
            <EventCard data={allEvents && allEvents[0]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
