import FeaturedOtherMoviesHomepage from '../Featured/FeaturedOtherMoviesHomepage';
import FeaturedUpcomingMoviesHomepage from '../Featured/FeaturedUpcomingMoviesHomepage';
import MobileNavbar from '../Navbar/MobileNavbar';
import Navbar from '../Navbar/Navbar';

function Home({
	upcomingMovies,
	popularMovies,
	nowPlayingMovies,
	topRatedMovies,
	IMG_URL,
	genres,
	setGenreMovies,
	setGenreTitle,
	favorites,
	setFavorites,
	API_KEY,
	BASE_URL,
	setPageNumber,
	pageNumber,
}) {
	return (
		<div className='home-container'>
			<MobileNavbar
				API_KEY={API_KEY}
				BASE_URL={BASE_URL}
				genres={genres}
				setGenreMovies={setGenreMovies}
				setGenreTitle={setGenreTitle}
				setPageNumber={setPageNumber}
				pageNumber={pageNumber}
			/>
			<Navbar />
			<FeaturedUpcomingMoviesHomepage
				upcomingMovies={upcomingMovies}
				path='upcoming'
				IMG_URL={IMG_URL}
				genres={genres}
				favorites={favorites}
				setFavorites={setFavorites}
				favBtnText='&#43;'
			/>
			<FeaturedOtherMoviesHomepage
				featuredMovies={popularMovies}
				title='Popular now'
				path='popular'
				IMG_URL={IMG_URL}
				favorites={favorites}
				setFavorites={setFavorites}
				favBtnText='&#43;'
			/>
			<FeaturedOtherMoviesHomepage
				featuredMovies={nowPlayingMovies}
				title='Now playing'
				path='now_playing'
				IMG_URL={IMG_URL}
				favorites={favorites}
				setFavorites={setFavorites}
				favBtnText='&#43;'
			/>
			<FeaturedOtherMoviesHomepage
				featuredMovies={topRatedMovies}
				title='Top rated'
				path='top_rated'
				IMG_URL={IMG_URL}
				favorites={favorites}
				setFavorites={setFavorites}
				favBtnText='&#43;'
			/>
		</div>
	);
}

export default Home;
