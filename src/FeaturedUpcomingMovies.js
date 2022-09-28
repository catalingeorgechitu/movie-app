import React from 'react';
import logo from './img/imdb.svg';

export default function FeaturedUpcomingMovies({ upcomingMovies }) {
	const IMG_URL = 'https://image.tmdb.org/t/p/w500';

	return (
		<div className='featured-upcoming-movies-container'>
			<div className='featured-header'>
				<h2 className='featured-title'>Upcoming movies</h2>
				<button className='btn'>See all &gt;</button>
			</div>
			<div className='featured-movies'>
				{upcomingMovies &&
					upcomingMovies.slice(0, 8).map(movie => (
						<div key={movie.id} className='featured-upcoming-movie'>
							<img
								className='poster'
								src={`${IMG_URL}${movie.backdrop_path}`}
								alt='Movie poster'
							/>
							<div className='featured-upcoming-infos'>
								<h4 className='featured-upcoming-title'>{movie.title}</h4>
								<div className='featured-more-infos'>
									<div className='featured-more-infos-left'>
										<p className='featured-upcoming-genre'>
											{'INSERT GENRE HERE!!!!!!!'}
										</p>
										<p className='featured-upcoming-rating'>
											<img src={logo} alt='IMDB Logo' />
											{movie.vote_average} rating
										</p>
									</div>
									<div className='featured-upcoming-more-infos-right'>
										<button className='btn watch-trailer-btn watch-upcoming-trailer-btn'>
											Watch trailer
										</button>
										<button className='btn add-to-favorites-btn upcoming-add-to-favorites-btn'>
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
