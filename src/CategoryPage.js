import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './img/imdb.svg';

export default function CategoryPage({
	movies,
	IMG_URL,
	title,
	setPageNumber,
}) {
	const pageLimit = 10;
	const pageArray = [...Array(pageLimit + 1).keys()].splice(1);

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
											{movie.vote_average.toFixed(1)} rating
										</p>
									</div>
								</div>
							</Link>
						</div>
					))}
			</div>

			<div className='page-numbers'>
				{pageArray &&
					pageArray.map(elem => (
						<button
							className='page-number'
							onClick={() => setPageNumber(elem)}
							key={elem}
						>
							{elem}
						</button>
					))}
			</div>
		</div>
	);
}
