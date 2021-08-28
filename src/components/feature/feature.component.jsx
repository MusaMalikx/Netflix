import React, {useEffect } from "react";
import { ReactComponent as Symbol } from "../../assets/netflix-symbol.svg";
import axios from "axios";
import requests from "../../requests";
import moviesRequests from "../../moviesRequest";
import tvShowsRequests from "../../tvShowsRequest";
import newPopularRequests from "../../newPopularRequest";
import Category from "../category/category.component";
import "./feature.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setMovie } from "../../features/featureMovie/featureMovieSlice";

export const Feature = ({ type, page }) => {

  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  //const [movie, setMovie] = useState({});
  //const [genre, setGenre] = useState("")
  //const [tp, setTp] = useState("");

  //axios.get(`https://api.themoviedb.org/3/${type?.media_type}/${type?.id}?api_key=d02666ac6adffd1a4f10b4f15e56beb0&append_to_response=videos`)
  useEffect(() => {

    const fetchData = async () => {
      //async function fetchData() {
      if (type === "movie") {
        const request = await axios.get(moviesRequests.fetchTrending);
        dispatch(setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        ));
        //setTp(type);
        return request;
      }
      else if (type === "tv") {
        const request = await axios.get(tvShowsRequests.fetchTrending);
        dispatch(setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        ));
        //setTp(type);
        return request;
      }
      else if (page === "popular") {

        const rndInt = Math.floor(Math.random() * 2) + 1
        if (rndInt === 1) {
          const request = await axios.get(newPopularRequests.fetchPopularTvShows);
          dispatch(setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
            ]
          ));
          //setTp("tv");
          return request;
        }
        else if (rndInt === 2) {
          const request = await axios.get(newPopularRequests.fetchPopularMovies);
          dispatch(setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
            ]
          ));
          //setTp("movie");
          return request;
        }
      }
      // else if (page === "kid") {
      //   const request = await axios.get(`http://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API}&with_genres=10762&page=1`);
      //   setMovie(
      //     request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //     ]
      //   );
      //   //setTp("tv");
      //   return request;
      // }
      else {
        const request = await axios.get(requests.fetchTrending);
        dispatch(setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        ));

        // const ty = movie.media_type ? movie.media_type : null

        // setTp(ty);
        return request;
      }
    }

    //!type ? setTp(movie.media_type) : setTp(type)
    fetchData();

    // return (()=> fetchData());

  }, [type, page, dispatch]);

  // useEffect(() => {
  //   console.log(genre);
  //   console.log(process.env.REACT_APP_API);
  // }, [genre])

  //type, page
  //, movie.media_type
  //console.log(movie);
  // console.log(type);
  // console.log(tp);

  return (
    <>
      {
        movie && (
          <>
            <div
              className="feature"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              {
                page && page !== "popular" && <Category page={page} />
              }

              <div
                className="info"
                style={{
                  paddingTop: page && page !== "popular" ? "40px" : "150px",
                }}
              >
                <Symbol style={{ width: "20px", height: "30px", marginTop: "50px" }} />
                
                <h2>
                  {movie.name || movie.title || movie.original_title || movie.original_name}
                </h2>
                <span className="desc">
                  {movie.overview?.length && movie.overview.length > 100 ? movie.overview.substr(0, 100 - 1) + "..." : movie.overview}
                </span>
              </div>
            </div>
          </>
        )
      }

    </>
  );
};
