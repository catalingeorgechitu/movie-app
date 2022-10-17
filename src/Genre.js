import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Genre({
	API_KEY,
	BASE_URL,
	genres,
	setGenreMovies,
	setGenreTitle,
	setPageNumber,
	pageNumber,
}) {
	const [movieGenre, setMovieGenre] = useState({
		id: 28,
		name: 'Action',
	});
	const navigate = useNavigate();

	console.log(pageNumber);

	useEffect(() => {
		fetchData(movieGenre);
	}, [movieGenre, pageNumber]);

	function fetchData(genre) {
		fetch(
			`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&page=${pageNumber}`
		)
			.then(response =>
				response.json().then(data => {
					setGenreMovies(data.results.sort(() => Math.random() - 0.5));
					setPageNumber(data.page);
				})
			)
			.catch(error => {
				console.log(`An error has occured: ${error}`);
			});
		setGenreTitle(genre.name);
	}

	return (
		<div className='genre-container'>
			<h2 className='submenu-title'>GENRE</h2>
			<div className='genre-sub-container'>
				{genres &&
					genres.map(genre => (
						<NavLink key={genre.id} to={`genres/${genre.name}`}>
							<button
								onClick={e => {
									e.preventDefault();
									setMovieGenre(genre);
									navigate(`genres/${genre.name}`, { replace: true });
								}}
								className='genre btn'
							>
								<p>{genre.name}</p>
								<p className='genre-add-btn'>&#43;</p>
							</button>
						</NavLink>
					))}
			</div>
		</div>
	);
}
