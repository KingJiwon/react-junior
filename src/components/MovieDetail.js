import PropTypes from "prop-types";

function MovieDetail({
  title,
  url,
  img,
  genres,
  like,
  download,
  lang,
  summary,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <a href={url}>
        <img src={img} alt={title} />
      </a>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>Like : {like}</p>
      <p>Download : {download}</p>
      <p>Language : {lang}</p>
      {summary == "" ? <p>Summary : None :(</p> : <p>Summary: {summary}</p>}
    </div>
  );
}

export default MovieDetail;
