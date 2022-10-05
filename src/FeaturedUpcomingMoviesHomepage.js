import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/imdb.svg';

export default function FeaturedUpcomingMoviesHomepage({
	upcomingMovies,
	path,
	IMG_URL,
	genres,
}) {
	const genreList = [];
	genres.map(elem => {
		genreList[elem.id] = elem.name;
	});

	return (
		<div className='featured-upcoming-movies-container'>
			<div className='featured-header'>
				<h2 className='featured-title'>Upcoming movies</h2>
				<Link className='btn' to={path}>
					See all &gt;
				</Link>
			</div>
			<div className='featured-movies'>
				{upcomingMovies &&
					upcomingMovies.slice(0, 8).map(movie => (
						<div key={movie.id} className='featured-upcoming-movie'>
							<Link to={`/movie/${movie.id}`}>
								<img
									className='poster'
									src={`${IMG_URL}w500${movie.backdrop_path}`}
									alt='Movie poster'
								/>
								<div className='featured-upcoming-infos'>
									<h4 className='featured-upcoming-title'>{movie.title}</h4>
									<div className='featured-more-infos'>
										<div className='featured-more-infos-left'>
											<div className='featured-upcoming-genre'>
												{movie.genre_ids.map(elem => (
													<p key={elem}>{genreList[elem]}</p>
												))}
											</div>
											<p className='featured-upcoming-rating'>
												<img src={logo} alt='IMDB Logo' />
												{movie.vote_average} rating
											</p>
										</div>
										<div className='featured-upcoming-more-infos-right'>
											{/* <Link to='insert trailer here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'> */}
											<button className='btn watch-trailer-btn watch-upcoming-trailer-btn'>
												Watch trailer
											</button>
											{/* </Link> */}
											<button className='btn add-to-favorites-btn upcoming-add-to-favorites-btn'>
												&#43;
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
