import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/imdb.svg';

export default function Recommended({ featuredMovies, IMG_URL, title }) {
	const recommendedMovie = [...featuredMovies];
	return (
		<div className='recommended-movies-container'>
			<div className='featured-header'>
				<h2 className='featured-title'>{title}</h2>
			</div>
			<div className='recommended-movie'>
				{recommendedMovie &&
					recommendedMovie
						.sort(() => Math.random() - 0.5)
						.slice(0, 1)
						.map(movie => (
							<div key={movie.id} className='recommended-movie'>
								<Link to={`/movie/${movie.id}`}>
									<img
										className='poster'
										src={`${IMG_URL}w400${movie.backdrop_path}`}
										alt='Movie poster'
									/>
									<div className='featured-other-infos'>
										<h4 className='featured-other-title'>{movie.title}</h4>
										<div className='featured-more-infos'>
											<div className='featured-more-infos-left'>
												<p className='featured-other-date'>
													{movie.release_date.substring(4, 0)}
												</p>
												<p className='featured-other-rating'>
													<img src={logo} alt='IMDB Logo' />
													{movie.vote_average} rating
												</p>
											</div>
											<div className='featured-other-more-infos-right'>
												<button className='btn watch-trailer-btn watch-other-trailer-btn'>
													Watch trailer
												</button>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
			</div>
		</div>
	);
}
