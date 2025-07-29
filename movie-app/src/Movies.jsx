import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  const [activeCategory, setActiveCategory] = useState("All"); // Track active

  const filterByCategory = (cat) => {
    setActiveCategory(cat); // Update active button

    if (cat === "All") {
      setMovieList(movies);
    } else {
      setMovieList(movies.filter((data) => data.category === cat));
    }

    // Mobile menu close
    const menu = document.getElementById("navbarButtons");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  // Helper function for button class
  const getButtonClass = (cat, baseClass) => {
    return activeCategory === cat ? `${baseClass} active` : baseClass;
  };

  return (
    <div className="margin-top">
      <div className="container">

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              MovieZone
            </a>

            {/* Hamburger button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarButtons"
              aria-controls="navbarButtons"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible menu */}
            <div className="collapse navbar-collapse" id="navbarButtons">
              <div className="navbar-nav ms-auto">
                <button
                  onClick={() => filterByCategory("All")}
                  className={getButtonClass("All", "btn btn-outline-primary mx-2 my-1")}
                >
                  All
                </button>
                <button
                  onClick={() => filterByCategory("Action")}
                  className={getButtonClass("Action", "btn btn-outline-primary mx-2 my-1")}
                >
                  Action
                </button>
                <button
                  onClick={() => filterByCategory("Thriller")}
                  className={getButtonClass("Thriller", "btn btn-outline-light mx-2 my-1")}
                >
                  Thriller
                </button>
                <button
                  onClick={() => filterByCategory("Animation")}
                  className={getButtonClass("Animation", "btn btn-outline-info mx-2 my-1")}
                >
                  Animation
                </button>
                <button
                  onClick={() => filterByCategory("Horror")}
                  className={getButtonClass("Horror", "btn btn-outline-warning mx-2 my-1")}
                >
                  Horror
                </button>
                <button
                  onClick={() => filterByCategory("Drama")}
                  className={getButtonClass("Drama", "btn btn-outline-info mx-2 my-1")}
                >
                  Drama
                </button>
                <button
                  onClick={() => filterByCategory("Sci-Fi")}
                  className={getButtonClass("Sci-Fi", "btn btn-outline-light mx-2 my-1")}
                >
                  Sci-Fi
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Movies List */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          {movieList.map((data) => (
            <div
              key={data.id}
              style={{ maxWidth: "280px", textAlign: "center" }}
            >
              <div style={{ padding: "10px" }} className="hover_effect">
                <img
                  src={data.poster_path}
                  alt=""
                  style={{
                    width: "200px",
                    height: "280px",
                    borderRadius: "10px",
                    border: "1px solid yellow",
                  }}
                />
              </div>
              <h5>{data.title}</h5>
              <p>{data.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
