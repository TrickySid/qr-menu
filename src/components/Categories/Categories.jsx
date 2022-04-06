import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Categories.css";

function Categories(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("categories_icon");

  const content = useRef(null);

  function toggleCategories() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "categories_icon" : "categories_icon rotate"
    );
  }

  return (
    <div className="categories_section">
      <button className={`categories ${setActive}`} onClick={toggleCategories}>
        <p className="categories_title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="categories_content"
      >
        <div
          className="categories_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Categories;
