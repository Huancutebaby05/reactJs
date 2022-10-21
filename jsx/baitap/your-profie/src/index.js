import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let element = (
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img
        className="avatar"
        src="https://1.bp.blogspot.com/-n_bFzL9lPUU/Xp23H9Sk8yI/AAAAAAAAhyA/JYfvZhwguxc8vT_YS3w14Xi3YWf3hxqIQCLcBGAsYHQ/s1600/Hinh-Anh-Dep-Tren-Mang%2B%25282%2529.jpg"
        alt="avatar"
      />
      <div className="card--body">
        <div>
          <p className="text-header">Nguyễn Văn Trường</p>
          <p className="text-sub">
          Keep smiling, because life is a beautiful thing and there's so much to smile about.
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
