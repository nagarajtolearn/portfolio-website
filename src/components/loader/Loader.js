import React, { useEffect } from "react";
import "./loader.css";
import logo from "./logo256.png";

const Loader = ({ loading }) => {
  useEffect(() => {
    setTimeout(() => {
      loading(false);
    }, 4000);
  }, [loading]);
  return (
    <div className="loader">
      {/* <svg
        className="svg__loader"
        width="256"
        height="256"
        viewBox="0 0 162 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      > */}
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
