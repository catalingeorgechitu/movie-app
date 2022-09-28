import { useEffect, useState } from 'react';
import FeaturedOthers from './FeaturedOthers';
import FeaturedUpcomingMovies from './FeaturedUpcomingMovies';
import Menu from './Menu';
import Navbar from './Navbar';
import Genre from './Genre';
import Search from './Search';

function App() {
	const API_KEY = 'aef14956eb2fe627aa039f4dc8e3a7b7';
	const BASE_URL = 'https://api.themoviedb.org/3/';

	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setUpcomingMovies(data.results);
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
					setPopularMovies(data.results);
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
					setNowPlayingMovies(data.results);
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

	return (
		<div className='container'>
			<Menu />
			<div className='main-container'>
				<Navbar />
				<FeaturedUpcomingMovies
					upcomingMovies={upcomingMovies.sort(() => Math.random() - 0.5)}
				/>
				<FeaturedOthers
					featuredMovies={popularMovies.sort(() => Math.random() - 0.5)}
					title={'Popular now'}
				/>
				<FeaturedOthers
					featuredMovies={nowPlayingMovies.sort(() => Math.random() - 0.5)}
					title={'Now playing'}
				/>
				<FeaturedOthers featuredMovies={topRatedMovies} title={'Top rated'} />
			</div>
			<div className='genre-search-container'>
				<Search API_KEY={API_KEY} BASE_URL={BASE_URL}/>
				<Genre API_KEY={API_KEY} BASE_URL={BASE_URL} />
			</div>
		</div>
	);
}

export default App;
