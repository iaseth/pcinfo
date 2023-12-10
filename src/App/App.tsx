import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';



export default function App () {

	return (
		<div className="bg-zinc-900 text-white">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
