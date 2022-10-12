import React, { useEffect } from "react";
import "./loader.css";

const Loader = ({ loading }) => {
  useEffect(() => {
    setTimeout(() => {
      loading(false);
    }, 4000);
  }, [loading]);
  return (
    <div className="loader">
      <div className="loader">
        Loading...
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
