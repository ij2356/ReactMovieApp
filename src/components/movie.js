import React, { ReactPropTypes } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Movie({ img, title, rating, genres, id}) {
  return (
		<div key ={id}>
      <div className="thumbnail">
        <img src={img} alt="썸네일" />
      </div>
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <div className="rating">{rating}</div>

     
			<ul>
				{genres.map((g, index) => (
					<li key={index}>{g}</li>
				))}
			</ul>
    </div>
  );
}

//프로토타입 쓰기
 
export default Movie;