import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-img">
        <img
          src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80"
          alt=""
        />
      </div>
      <div className="banner-info">
        <h1>Guides Istanbul</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          explicabo, maxime modi dolor perspiciatis provident ullam. Ex dolorem
          doloremque saepe itaque maiores iure eaque delectus magni sapiente, in
          nesciunt aperiam et nostrum sit aut perferendis porro! Sunt suscipit
          corrupti modi.
        </p>
      </div>
      <div className="banner-search">
        <div className="serach-category select">
          <select name="category" id="category">
            <option selected value="">
              Choose Service
            </option>
          </select>
        </div>
        <div className="search-service select">
          <select name="service" id="service">
            <option selected value="">
              Choose Category
            </option>
          </select>
        </div>
        <div className="search-button">
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
