import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Search({ API_KEY, BASE_URL }) {
	const IMG_URL = 'https://image.tmdb.org/t/p/w200';

	const [inputValue, setInputValue] = useState('');
	const [filteredMovies, setFilteredMovies] = useState([]);

	function handleUserInput(e) {
		if (e.target.value !== '') {
			setInputValue(e.target.value);
		} else {
			setInputValue('');
			setFilteredMovies([]);
		}
	}

	useEffect(() => {
		inputValue !== '' &&
			fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${inputValue}`)
				.then(response =>
					response.json().then(data => {
						setFilteredMovies(data.results);
					})
				)
				.catch(error => {
					console.log(`An error has occured: ${error}`);
				});
	}, [inputValue]);

	return (
		<div className='searchbar-container'>
			<input
				className='searchbar'
				type='text'
				placeholder='Search movie...'
				value={inputValue}
				onChange={handleUserInput}
			/>
			<button
				className='btn clean-searchbar'
				onClick={() => {
					setInputValue('');
					setFilteredMovies([]);
				}}
			>
				&#10006;
			</button>

			{filteredMovies !== '' && (
				<div className='search-container'>
					{filteredMovies.slice(0, 10).map(movie => (
						<Link reloadDocument key={movie.id} to={`/movie/${movie.id}`}>
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
