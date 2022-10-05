import FeaturedOtherMoviesHomepage from './FeaturedOtherMoviesHomepage';
import FeaturedUpcomingMoviesHomepage from './FeaturedUpcomingMoviesHomepage';
import Navbar from './Navbar';

function Home({
	upcomingMovies,
	popularMovies,
	nowPlayingMovies,
	topRatedMovies,
	IMG_URL,
	genres,
}) {
	return (
		<div className='home-container'>
			<Navbar />
			<FeaturedUpcomingMoviesHomepage
				upcomingMovies={upcomingMovies}
				path='upcoming'
				IMG_URL={IMG_URL}
				genres={genres}
			/>
			<FeaturedOtherMoviesHomepage
				featuredMovies={popularMovies}
				title='Popular now'
				path='popular'
				IMG_URL={IMG_URL}
			/>
			<FeaturedOtherMoviesHomepage
				featuredMovies={nowPlayingMovies}
				title='Now playing'
				path='now_playing'
				IMG_URL={IMG_URL}
			/>
			<FeaturedOtherMoviesHomepage
				featuredMovies={topRatedMovies}
				title='Top rated'
				path='top_rated'
				IMG_URL={IMG_URL}
			/>
		</div>
	);
}

export default Home;
