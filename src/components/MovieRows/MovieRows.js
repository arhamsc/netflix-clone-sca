import Row from "../Rows/Row";

import requestUrls from "../../context/request_urls";

const MovieRows = () => {
  return (
    <section>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requestUrls.fetchNetflixOriginals}
        expandedWidth={true}
      />
      {/* This is because only this row has more width. */}
      <Row title="Trending" fetchUrl={requestUrls.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requestUrls.fetchTopRated} />
      <Row title="Action" fetchUrl={requestUrls.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requestUrls.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requestUrls.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requestUrls.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requestUrls.fetchDocumentaries} />
    </section>
  );
}

export default MovieRows;