import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log("done");
    setDetailData(json.data.movie);
    setLoading(true);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="detail">
      <div>
        <h1>Detail</h1>
        <div className="thumbnail w-400">{loading ? <img src={detailData.medium_cover_image} alt="상세썸네일" /> : null}</div>
        <div className="info">
          <a href={detailData.url}>{detailData.title}</a>
          <p>
            년도 {detailData.year}
            <br />
            평점 {detailData.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
