import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ img, title, rating, genres, id}) {
  return (
    <li key={id}>
      <div className="thumbnail">
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
          <img src={img} alt="썸네일" />
        </Link>
      </div>
      <h2 className="fs-16">
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <div className="rating mg-t-10 mg-b-5">평점 : {rating}</div>

      <ul>
        장르
        {genres.map((g, index) => (
          <li className="fs-12" key={index}>
            #{g}
          </li>
        ))}
      </ul>
    </li>
  );
}

//프로토타입 쓰기
Movie.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.string,
  genres: PropTypes.string,
  id: PropTypes.string
};
export default Movie;