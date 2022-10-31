import React from 'react';
import { Link } from 'react-router-dom';
import AddToFavorites from '../Favorites/AddToFavorites';
import logo from '../../assets/img/imdb.svg';

export default function FeaturedOtherMoviesHomepage({
	featuredMovies,
	title,
	path,
	IMG_URL,
	favorites,
	setFavorites,
	favBtnText,
}) {
	return (
		<div className='featured-popular-movies-container'>
			<div className='featured-header'>
				<h2 className='featured-title'>{title}</h2>
				<Link className='btn' to={path}>
					See all &gt;
				</Link>
			</div>
			<div className='featured-movies'>
				{featuredMovies &&
					featuredMovies.slice(0, 8).map(movie => (
						<div key={movie.id} className='featured-other-movie'>
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
												{movie.vote_average.toFixed(1)} rating
											</p>
										</div>
									</div>
								</div>
							</Link>
							<div className='featured-other-more-infos-right'>
								<Link to={`/movie/${movie.id}`}>
									<button className='btn watch-trailer-btn watch-other-trailer-btn'>
										Watch trailer
									</button>
								</Link>
								<AddToFavorites
									movie={movie}
									favorites={favorites}
									setFavorites={setFavorites}
									favBtnText={favBtnText}
								/>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
