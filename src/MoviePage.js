import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToFavorites from './AddToFavorites';
import MoviePageRecommendations from './MoviePageRecommendations';
import RemoveFromFavorites from './RemoveFromFavorites';

export default function MoviePage({
	favorites,
	setFavorites,
	favBtnText,
	moreClassesBtn,
	moreClassesText,
}) {
	const API_KEY = `${process.env.REACT_APP_API_KEY}`;
	const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
	const IMG_URL = `${process.env.REACT_APP_IMG_URL}`;
	const movieId = useParams().id;
	const [movie, setMovie] = useState({});
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
			.then(response =>
				response.json().then(data => {
					setMovie(data);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
	}, [movieId]);

	useEffect(() => {
		if (movie) {
			fetch(`${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}`)
				.then(response =>
					response.json().then(data => {
						setVideos(data.results);
					})
				)
				.catch(error => {
					console.log(`An error has occured: ${error}`);
				});
		}
	}, [movieId]);

	return (
		<>
			{movie.id && (
				<div className='movie-container'>
					<div className='title-container'>
						<div className='title-container-left'>
							<h3 className='movie-title'>{movie.title}</h3>
							<div className='title-infos'>
								<div className='movie-release-date'>{movie.release_date}</div>
								<div>{movie.runtime} min</div>
							</div>
						</div>
						<div className='movie-rating'>
							<h4>IMDb rating</h4>
							<div>
								<span className='movie-rating-value'>
									{Math.round(movie.vote_average * 10) / 10}
								</span>
								<span> /10</span>
							</div>
						</div>
					</div>
					<div className='movie-media'>
						{movie.poster_path && (
							<img
								className='movie-poster'
								src={`${IMG_URL}w500${movie.poster_path}`}
								alt='Movie Poster'
							/>
						)}
						<iframe
							width='720'
							height='405'
							src={`https://www.youtube-nocookie.com/embed/${
								videos.length !== 0 &&
								videos.find(video => video.type === 'Trailer').key
							}`}
							title='YouTube'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>

					<div className='movie-favs-buttons'>
						<AddToFavorites
							favorites={favorites}
							setFavorites={setFavorites}
							favBtnText={favBtnText}
							moreClassesBtn={moreClassesBtn}
							moreClassesText={moreClassesText}
							movie={movie}
						/>
						<RemoveFromFavorites
							favorites={favorites}
							setFavorites={setFavorites}
							movie={movie}
						/>
					</div>

					<div className='movie-genres'>
						{movie.genres.map(genre => (
							<div className='movie-genre' key={genre.id}>
								{genre.name}
							</div>
						))}{' '}
					</div>
					<div className='movie-description'>{movie.overview}</div>
					<MoviePageRecommendations
						BASE_URL={BASE_URL}
						API_KEY={API_KEY}
						movieId={movieId}
						IMG_URL={IMG_URL}
						favorites={favorites}
						setFavorites={setFavorites}
						favBtnText='&#43;'
					/>
				</div>
			)}
		</>
	);
}
