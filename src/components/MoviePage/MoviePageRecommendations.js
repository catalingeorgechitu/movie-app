import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddToFavorites from '../Favorites/AddToFavorites';
import logo from '../../assets/img/imdb.svg';

export default function MoviePageRecommendations({
	BASE_URL,
	API_KEY,
	movieId,
	IMG_URL,
	favorites,
	setFavorites,
	favBtnText,
}) {
	const [recommendedMovies, setRecommendedMovies] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setRecommendedMovies(data.results.sort(() => Math.random() - 0.5));
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, [movieId]);

	return (
		<div className='recommendation-container'>
			<div className='recommendation-header'>
				<h2 className='recommendation-title'>Similar movies:</h2>
			</div>
			<div className='recommendation-movies-container'>
				{recommendedMovies &&
					recommendedMovies.slice(0, 8).map(movie => (
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
