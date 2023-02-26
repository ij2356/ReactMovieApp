import { ReactPropTypes } from "react";

function Movie({ img, title, rating, genres }) {
  return (
		<div>
      <div className="thumbnail">
        <img src={img} alt="썸네일" />
      </div>
      <h2>{title}</h2>
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