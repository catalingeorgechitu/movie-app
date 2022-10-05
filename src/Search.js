import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Search({ API_KEY, BASE_URL }) {
	const IMG_URL = 'https://image.tmdb.org/t/p/w200';

	const [searchedMovieValue, setSearchedMovieValue] = useState('');
	const [filteredMovies, setFilteredMovies] = useState([]);

	function handleChange(e) {
		if (e.target.value !== '') {
			setSearchedMovieValue(e.target.value);
		} else {
			setFilteredMovies([]);
		}
	}

	useEffect(() => {
		searchedMovieValue !== '' &&
			fetch(
				`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchedMovieValue}`
			)
				.then(response =>
					response.json().then(data => {
						setFilteredMovies(data.results);
					})
				)
				.catch(error => {
					console.log(`An error has occured: ${error}`);
				});
	}, [searchedMovieValue]);

	return (
		<div className='searchbar-container'>
			<input
				className='searchbar'
				type='text'
				placeholder='Search movie...'
				onChange={handleChange}
			/>

			{filteredMovies !== '' && (
				<div className='search-container'>
					{filteredMovies.slice(0, 10).map(movie => (
						<Link key={movie.id} to={`/movie/${movie.id}`}>
							<div className='search-movie'>
								<img
									className='search-poster'
									src={`${IMG_URL}${movie.backdrop_path}`}
									alt='Movie poster'
								/>
								<h3 className='search-title'>{movie.title}</h3>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
