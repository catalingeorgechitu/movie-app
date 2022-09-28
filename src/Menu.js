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

export default function Menu() {
	return (
		<div className='menu-container'>
			<div className='submenu-container'>
				<h2 className='submenu-title'>MENU</h2>
				<div className='submenu-elements'>
					<div className='submenu-element'>
						<FontAwesomeIcon className='fa-icon' icon={faHouse} />
						<button className='btn'>Home</button>
					</div>
					<div className='submenu-element'>
						<FontAwesomeIcon className='fa-icon' icon={faHeart} />
						<button className='btn'>Watchlist</button>
					</div>
				</div>
			</div>
			<div className='submenu-container'>
				<h2 className='submenu-title'>LIBRARY</h2>
				<div className='submenu-elements'>
					<div className='submenu-element'>
						<FontAwesomeIcon className='fa-icon' icon={faClock} />
						<button className='btn'>Upcoming</button>
					</div>
					<div className='submenu-element'>
						<FontAwesomeIcon className='fa-icon' icon={faArrowTrendUp} />
						<button className='btn'>Popular</button>
					</div>
					<div className='submenu-element'>
						<FontAwesomeIcon className='fa-icon' icon={faPlayCircle} />
						<button className='btn'>Now playing</button>
					</div>
					<div className='submenu-element'>
						<FontAwesomeIcon className='fa-icon' icon={faStar} />
						<button className='btn'>Top rated</button>
					</div>
				</div>
			</div>
		</div>
	);
}
