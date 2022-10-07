import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Genre({
	API_KEY,
	BASE_URL,
	genres,
	setGenreMovies,
	setGenreTitle,
}) {
	const navigate = useNavigate();
	// const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		fetchData({ id: 28, name: 'Action' });
	}, []);

	// const handleClick = event => {
	// 	setIsActive(current => !current);
	// };

	function fetchData(genre) {
		fetch(
			`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`
		)
			.then(response =>
				response.json().then(data => {
					setGenreMovies(data.results.sort(() => Math.random() - 0.5));
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
		setGenreTitle(genre.name);
		// navigate(`genres/${genre.name}`, { replace: true });
	}

	return (
		<div className='genre-container'>
			<h2 className='submenu-title'>GENRE</h2>
			<div className='genre-sub-container'>
				{genres &&
					genres.map(genre => (
						<button
							onClick={e => {
								e.preventDefault();
								fetchData(genre);
								navigate(`genres/${genre.name}`, { replace: true });
							}}
							className='genre btn'
							// {isActive ? 'bg-red-400 text-white' : ''}
							key={genre.id}
						>
							<p>{genre.name}</p>
							<p className='genre-add-btn'>&#43;</p>
						</button>
					))}
			</div>
		</div>
	);
}
