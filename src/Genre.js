import React from 'react';
import { useEffect, useState } from 'react';

export default function Genre({ API_KEY, BASE_URL }) {
	const [genres, setGenres] = useState([]);

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
		<div className='genre-container'>
			<h2 className='submenu-title'>GENRE</h2>
			<div className='genre-sub-container'>
				{genres &&
					genres.map(genre => (
						<button className='genre btn' key={genre.id}>
							<p>{genre.name}</p>
							<p className='genre-add-btn'>&#43;</p>
						</button>
					))}
			</div>
		</div>
	);
}
