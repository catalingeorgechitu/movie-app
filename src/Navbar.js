import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='navbar-container'>
			<div className='navbar-titles'>
				<Link className='btn navbar-btn' to='/'>
					Movies
				</Link>
				<Link className='btn navbar-btn' to='/shows'>
					TV Shows (under maintenance)
				</Link>
			</div>
			{/* <div>some icons here</div> */}
		</div>
	);
}
