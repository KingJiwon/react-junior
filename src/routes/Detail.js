import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <MovieDetail
              title={details.title}
              url={details.url}
              img={details.large_cover_image}
              genres={details.genres}
              like={details.like_count}
              download={details.download_count}
              lang={details.language}
              summary={details.description_full}
            />
          </div>
        )}
      </h1>
    </div>
  );
}

export default Detail;
