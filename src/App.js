import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Search from './Search';
import Genre from './Genre';
import NotFound from './NotFound';
import MoviePage from './MoviePage';
import CategoryPage from './CategoryPage';
import { useState, useEffect } from 'react';
import Recommended from './Recommended';

function App() {
	const API_KEY = `${process.env.REACT_APP_API_KEY}`;
	const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
	const IMG_URL = `${process.env.REACT_APP_IMG_URL}`;
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [genreMovies, setGenreMovies] = useState([]);
	const [genreTitle, setGenreTitle] = useState([]);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setUpcomingMovies(data.results.sort(() => Math.random() - 0.5));
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, []);
	useEffect(() => {
		fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setPopularMovies(data.results.sort(() => Math.random() - 0.5));
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, []);
	useEffect(() => {
		fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setNowPlayingMovies(data.results.sort(() => Math.random() - 0.5));
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, []);
	useEffect(() => {
		fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setTopRatedMovies(data.results);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, []);
	useEffect(() => {
		fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setGenres(data.genres);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, []);

	return (
		<div className='container'>
			<Menu />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							upcomingMovies={upcomingMovies}
							popularMovies={popularMovies}
							nowPlayingMovies={nowPlayingMovies}
							topRatedMovies={topRatedMovies}
							IMG_URL={IMG_URL}
							genres={genres}
						/>
					}
				/>
				<Route
					path='upcoming'
					element={
						<CategoryPage
							API_KEY={API_KEY}
							BASE_URL={BASE_URL}
							movies={upcomingMovies}
							IMG_URL={IMG_URL}
							category={'upcoming'}
							title='Upcoming movies'
						/>
					}
				/>
				<Route
					path='popular'
					element={
						<CategoryPage
							API_KEY={API_KEY}
							BASE_URL={BASE_URL}
							movies={popularMovies}
							IMG_URL={IMG_URL}
							category={'popular'}
							title='Popular now'
						/>
					}
				/>
				<Route
					path='now_playing'
					element={
						<CategoryPage
							API_KEY={API_KEY}
							BASE_URL={BASE_URL}
							movies={nowPlayingMovies}
							IMG_URL={IMG_URL}
							category={'now_playing'}
							title='Now playing'
						/>
					}
				/>
				<Route
					path='top_rated'
					element={
						<CategoryPage
							API_KEY={API_KEY}
							BASE_URL={BASE_URL}
							movies={topRatedMovies}
							IMG_URL={IMG_URL}
							category={'top_rated'}
							title='Top rated movies'
						/>
					}
				/>
				<Route
					path={`genres/:genre`}
					element={
						<CategoryPage
							IMG_URL={IMG_URL}
							movies={genreMovies}
							title={`Genre: ${genreTitle}`}
						/>
					}
				/>
				<Route path='movie/:id' element={<MoviePage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<div className='genre-search-container'>
				<Search API_KEY={API_KEY} BASE_URL={BASE_URL} />
				<Genre
					API_KEY={API_KEY}
					BASE_URL={BASE_URL}
					genres={genres}
					setGenreMovies={setGenreMovies}
					setGenreTitle={setGenreTitle}
				/>
				<Recommended
					featuredMovies={popularMovies}
					IMG_URL={IMG_URL}
					title='Recommended by us'
				/>
			</div>
		</div>
	);
}

export default App;
