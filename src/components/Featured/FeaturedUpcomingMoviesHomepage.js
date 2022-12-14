import React from 'react';
import { Link } from 'react-router-dom';
import AddToFavorites from '../Favorites/AddToFavorites';
import logo from '../../assets/img/imdb.svg';

export default function FeaturedUpcomingMoviesHomepage({
	upcomingMovies,
	path,
	IMG_URL,
	genres,
	favorites,
	setFavorites,
	favBtnText,
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
												{movie.vote_average.toFixed(1)} rating
											</p>
										</div>
									</div>
								</div>
							</Link>
							<div className='featured-upcoming-more-infos-right'>
								<Link to={`/movie/${movie.id}`}>
									<button className='btn watch-trailer-btn watch-upcoming-trailer-btn'>
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
