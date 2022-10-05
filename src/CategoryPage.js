import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/imdb.svg';

export default function CategoryPage({
	movies,
	IMG_URL,
	category,
	BASE_URL,
	API_KEY,
	title,
}) {
	// const [categoryMovies, setCategoryMovies] = useState(movies);
	// const [pageNumber, setPageNumber] = useState('1');

	// useEffect(() => {
	// 	fetch(`${BASE_URL}movie/${category}?api_key=${API_KEY}`)
	// 		.then(response =>
	// 			response.json().then(data => {
	// 				setCategoryMovies(data.results);
	// 			})
	// 		)
	// 		.catch(error => {
	// 			console.log(`An error has occured: ${error}`);
	// 		});
	// }, [pageNumber]);

	// function increasePageNumber() {
	// 	setPageNumber(parseInt(pageNumber) + 1);
	// }

	return (
		<div className='main-container'>
			<h1 className='category-title'>{title}</h1>

			<div className='category-container'>
				{movies &&
					movies.map(movie => (
						<div key={movie.id} className='category-movie'>
							<Link to={`/movie/${movie.id}`}>
								<img
									className='category-poster'
									src={`${IMG_URL}w400${movie.backdrop_path}`}
									alt='Movie poster'
								/>
								<div className='category-infos'>
									<h4 className='category-movie-title'>{movie.title}</h4>
									<div className='category-more-infos'>
										<p className='category-date'>
											{movie.release_date.substring(4, 0)}
										</p>
										<p className='category-overview'>{movie.overview}</p>
										<p className='category-rating'>
											<img src={logo} alt='IMDB Logo' />
											{movie.vote_average} rating
										</p>
									</div>
								</div>
							</Link>
						</div>
					))}
			</div>
			{/* <button onClick={increasePageNumber} className='m-10'>
				Increase page number
			</button> */}
		</div>
	);
}
