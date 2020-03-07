import React, { useState, useEffect } from "react"
import Home_Movie from "./Home_Movie";

const Home = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {       // 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태
            _getMovies();
    })

    const _renderMovies = () => {
        const movies1 = movies.map(movie => {
            return <Home_Movie title={movie.title}
                poster={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                key={movie.id}
            />
        })
        return movies1
    }

    const _getMovies = async () => {
        const movies = await _callApi();
        setMovies(movies);
    }

    const _callApi = () => {

        return fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ad6e90979035c5eda25f7a40305c3dd&language=ko-KR&page=1")
            .then(response => response.json())
            .then(json => json.results)   // =>는 retrun을 내장하고 있다.
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1 id="movie_title">가장 인기 있는 영화</h1>
            <div id="Home">
                {movies ? _renderMovies() : "waiting"}
            </div>
        </>
    )
}

export default Home;