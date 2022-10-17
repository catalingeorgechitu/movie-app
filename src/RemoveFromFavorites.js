import React from 'react';

export default function RemoveFromFavorites({
	movie,
	favorites,
	setFavorites,
}) {
	let newFavorites = [];

	function handleRemoveFromFavorites() {
		if (favorites !== null) {
			deleteFavorites(movie);
		} else return;
	}

	function deleteFavorites(movie) {
		let movieIdsArray = [];
		favorites.map(elem => {
			movieIdsArray.push(elem.id);
		});
		if (movieIdsArray.includes(movie.id)) {
			let index = movieIdsArray.indexOf(movie.id);

			newFavorites = [...favorites];
			newFavorites.splice(index, 1);

			setFavorites(newFavorites);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
		} else return;
	}

	return (
		<>
			<button
				onClick={() => handleRemoveFromFavorites()}
				className='remove-favorites-button group'
			>
				<span className='remove-favorites-button-text'>
					Remove from Watchlist
				</span>
			</button>
		</>
	);
}
