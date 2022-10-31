import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import Genre from './components/Genre/Genre';
import NotFound from './components/NotFound/NotFound';
import MoviePage from './components/MoviePage/MoviePage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import { useState, useEffect } from 'react';
import Recommended from './components/Recommended/Recommended';

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
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem('favorites'))
	);
	const [pageNumber, setPageNumber] = useState(1);
	let location = useLocation();

	useEffect(() => {
		fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}&page=${pageNumber}`)
			.then(response =>
				response.json().then(data => {
					setUpcomingMovies(data.results.sort(() => Math.random() - 0.5));
					setPageNumber(data.page);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, [pageNumber]);
	useEffect(() => {
		fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${pageNumber}`)
			.then(response =>
				response.json().then(data => {
					setPopularMovies(data.results.sort(() => Math.random() - 0.5));
					setPageNumber(data.page);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, [pageNumber]);
	useEffect(() => {
		fetch(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&page=${pageNumber}`)
			.then(response =>
				response.json().then(data => {
					setNowPlayingMovies(data.results.sort(() => Math.random() - 0.5));
					setPageNumber(data.page);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, [pageNumber]);
	useEffect(() => {
		fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}&page=${pageNumber}`)
			.then(response =>
				response.json().then(data => {
					setTopRatedMovies(data.results);
					setPageNumber(data.page);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, [pageNumber]);
	useEffect(() => {
		fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setGenres(data.genres);
					setPageNumber(data.page);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, []);
	useEffect(() => {
		setPageNumber(1);
	}, [location]);

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
							setGenreTitle={setGenreTitle}
							setGenreMovies={setGenreMovies}
							favorites={favorites}
							setFavorites={setFavorites}
							pageNumber={pageNumber}
							setPageNumber={setPageNumber}
							API_KEY={API_KEY}
							BASE_URL={BASE_URL}
						/>
					}
				/>
				<Route
					path='watchlist'
					element={
						<CategoryPage
							API_KEY={API_KEY}
							BASE_URL={BASE_URL}
							movies={favorites}
							IMG_URL={IMG_URL}
							category={'watchlist'}
							title={'Watchlist'}
							favorites={favorites}
							setFavorites={setFavorites}
							setPageNumber={setPageNumber}
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
							setPageNumber={setPageNumber}
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
							setPageNumber={setPageNumber}
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
							setPageNumber={setPageNumber}
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
							setPageNumber={setPageNumber}
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
							setPageNumber={setPageNumber}
							pageNumber={pageNumber}
						/>
					}
				/>
				<Route
					path='movie/:id'
					element={
						<MoviePage
							favorites={favorites}
							setFavorites={setFavorites}
							favBtnText='Add to Watchlist'
							moreClassesBtn='add-to-favorites-big-btn group'
							moreClassesText='add-to-favorites-big-text'
						/>
					}
				/>
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
					setPageNumber={setPageNumber}
					pageNumber={pageNumber}
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
