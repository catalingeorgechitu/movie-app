import React from 'react';

export default function Genre({ genres }) {
	return (
		<div className='genre-container'>
			<h2 className='submenu-title'>GENRE</h2>
			<div className='genre-sub-container'>
				{genres &&
					genres.map(genre => (
						<button className='genre btn' key={genre.id}>
							<p>{genre.name}</p>
							<p className='genre-add-btn'>&#43;</p>
						</button>
					))}
			</div>
		</div>
	);
}
