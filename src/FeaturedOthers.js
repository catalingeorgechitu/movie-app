import React from 'react';
import logo from './img/imdb.svg';

export default function FeaturedOthers({ featuredMovies, title }) {
	const IMG_URL = 'https://image.tmdb.org/t/p/w400';

	return (
		<div className='featured-popular-movies-container'>
			<div className='featured-header'>
				<h2 className='featured-title'>{title}</h2>
				<button className='btn'>See all &gt;</button>
			</div>
			<div className='featured-movies'>
				{featuredMovies &&
					featuredMovies.slice(0, 8).map(movie => (
						<div key={movie.id} className='featured-other-movie'>
							<img
								className='poster'
								src={`${IMG_URL}${movie.backdrop_path}`}
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
										<button className='btn add-to-favorites-btn other-add-to-favorites-btn'>
											&#43;
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
