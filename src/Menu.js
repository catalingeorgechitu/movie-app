import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faHeart,
	faClock,
	faArrowTrendUp,
	faPlayCircle,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './active.css';

export default function Menu() {
	return (
		<div className='menu-container'>
			<div className='submenu-container'>
				<h2 className='submenu-title'>MENU</h2>
				<div className='submenu-elements'>
					<div className='submenu-element'>
						<NavLink end to='/'>
							<FontAwesomeIcon className='fa-icon' icon={faHouse} />
							<button className='btn'>Home</button>
						</NavLink>
					</div>
					<div className='submenu-element'>
						<NavLink to='/watchlist'>
							<FontAwesomeIcon className='fa-icon' icon={faHeart} />
							<button className='btn'>Watchlist</button>
						</NavLink>
					</div>
				</div>
			</div>
			<div className='submenu-container'>
				<h2 className='submenu-title'>LIBRARY</h2>
				<div className='submenu-elements'>
					<div className='submenu-element'>
						<NavLink to='/upcoming'>
							<FontAwesomeIcon className='fa-icon' icon={faClock} />
							<button className='btn'>Upcoming</button>
						</NavLink>
					</div>
					<div className='submenu-element'>
						<NavLink to='/popular'>
							<FontAwesomeIcon className='fa-icon' icon={faArrowTrendUp} />
							<button className='btn'>Popular</button>
						</NavLink>
					</div>
					<div className='submenu-element'>
						<NavLink to='/now_playing'>
							<FontAwesomeIcon className='fa-icon' icon={faPlayCircle} />
							<button className='btn'>Now playing</button>
						</NavLink>
					</div>
					<div className='submenu-element'>
						<NavLink to='/top_rated'>
							<FontAwesomeIcon className='fa-icon' icon={faStar} />
							<button className='btn'>Top rated</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
