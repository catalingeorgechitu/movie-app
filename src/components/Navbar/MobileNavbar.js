import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faPlus,
	faHouse,
	faHeart,
	faClock,
	faArrowTrendUp,
	faPlayCircle,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import Genre from '../Genre/Genre';

export default function MobileNavbar({
	API_KEY,
	BASE_URL,
	genres,
	setGenreMovies,
	setGenreTitle,
	setPageNumber,
	pageNumber,
}) {
	const [menuOpened, setMenuOpened] = useState(false);
	const [searchBarOpened, setSearchBarOpened] = useState(false);
	return (
		<div className='navbar-mobile flex justify-between xl:hidden'>
			<div className='navbar-mobile-menu'>
				<FontAwesomeIcon
					className='navbar-mobile-menu-item text-2xl my-5 hover:scale-105 hover:text-gray-400 duration-200'
					icon={faBars}
					onClick={() => {
						setMenuOpened(!menuOpened);
						setSearchBarOpened(false);
					}}
				/>
			</div>
			{menuOpened && (
				<ul className='bg-[#1A171E] flex flex-col absolute top-14 p-4 gap-3 z-50 border border-gray-500 rounded-md'>
					<NavLink className='space-x-2' end to='/'>
						<FontAwesomeIcon className='fa-icon' icon={faHouse} />
						<button className='btn'>Home</button>
					</NavLink>
					<NavLink
						className='space-x-2 border-b border-gray-400 pb-2'
						to='/watchlist'
					>
						<FontAwesomeIcon className='fa-icon' icon={faHeart} />
						<button className='btn'>Watchlist</button>
					</NavLink>
					<NavLink className='space-x-2' to='/upcoming'>
						<FontAwesomeIcon className='fa-icon' icon={faClock} />
						<button className='btn'>Upcoming</button>
					</NavLink>
					<NavLink className='space-x-2' to='/popular'>
						<FontAwesomeIcon className='fa-icon' icon={faArrowTrendUp} />
						<button className='btn'>Popular</button>
					</NavLink>
					<NavLink className='space-x-2' to='/now_playing'>
						<FontAwesomeIcon className='fa-icon' icon={faPlayCircle} />
						<button className='btn'>Now playing</button>
					</NavLink>
					<NavLink className='space-x-2' to='/top_rated'>
						<FontAwesomeIcon className='fa-icon' icon={faStar} />
						<button className='btn'>Top rated</button>
					</NavLink>
				</ul>
			)}
			<div className='navbar-mobile-searchbar'>
				<FontAwesomeIcon
					className='navbar-mobile-menu-item text-2xl my-5 hover:scale-105 hover:text-gray-400 duration-200'
					icon={faPlus}
					onClick={() => {
						setSearchBarOpened(!searchBarOpened);
						setMenuOpened(false);
					}}
				/>
			</div>
			{searchBarOpened && (
				<div className='bg-[#1A171E] flex flex-col absolute top-14 gap-3 p-1 z-50 border border-gray-500 rounded-md max-w-screen'>
					<Search API_KEY={API_KEY} BASE_URL={BASE_URL} />
					<Genre
						API_KEY={API_KEY}
						BASE_URL={BASE_URL}
						genres={genres}
						setGenreMovies={setGenreMovies}
						setGenreTitle={setGenreTitle}
						setPageNumber={setPageNumber}
						pageNumber={pageNumber}
					/>
				</div>
			)}
		</div>
	);
}
