import React, { useState, useEffect } from 'react';
import Movie from "./Movie";


const Main = () => {

    const [movies, setMovies] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {       // 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태
            _getMovies();

        window.addEventListener("scroll", _infiniteScroll, true)
    })

    const _renderMovies = () => {
        const movies1 = movies.map(movie => {
            return <Movie title={movie.title}
                entitle={movie.original_title}
                poster={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                vote_average={movie.vote_average}
                synopsis={movie.overview}
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

        return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9ad6e90979035c5eda25f7a40305c3dd&language=ko-KR&page="+page)
            .then(response => response.json())
            .then(json => json.results)   // =>는 retrun을 내장하고 있다.
            .catch(err => console.log(err))
    }

    const _infiniteScroll = () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        let clientHeight = document.documentElement.clientHeight;

        if(scrollTop + clientHeight === scrollHeight) {
            
            setPage(page+1);

            _callApi();
        }
    }

    return (
        <>
        <h1 id="new_movie_title">영화 목록</h1>
            <div className={movies ? "App" : "App--loading"}>
                {movies ? _renderMovies() : "Loading"}
            </div>
        </>
    );
}

export default Main;

