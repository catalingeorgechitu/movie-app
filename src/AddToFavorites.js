export default function AddToFavorites({
	movie,
	favorites,
	setFavorites,
	favBtnText,
	moreClassesBtn,
	moreClassesText,
}) {
	let newFavorites = [];

	function handleAddToFavorites() {
		if (favorites !== null) {
			addToFavorites(movie);
		} else {
			newFavorites = [movie];
			setFavorites(newFavorites);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
		}
	}

	function addToFavorites(movie) {
		let movieIdsArray = [];
		favorites.map(elem => {
			movieIdsArray.push(elem.id);
		});
		if (movieIdsArray.includes(movie.id)) {
			return;
		} else {
			newFavorites = [...favorites, movie];
			setFavorites(newFavorites);
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
		}
	}

	return (
		<button
			onClick={() => {
				handleAddToFavorites();
			}}
			className={`btn add-to-favorites-btn ${moreClassesBtn}`}
		>
			<span className={moreClassesText}>{favBtnText}</span>
		</button>
	);
}
