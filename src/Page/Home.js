import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  const slide = [
    {
      id: 1,
      url: "https://picsum.photos/500/500?random=1",
    },
    {
      id: 2,
      url: "https://picsum.photos/500/500?random=2",
    },
    {
      id: 3,
      url: "https://picsum.photos/500/500?random=3",
    },
  ];

  return (
    <main>
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {slide.map((slide) => (
              <div className="carousel-item active">
                <img src={slide.url} className="d-block w-100" alt="" />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <ProductList></ProductList>

    </main>
  );
}

export default Home;
