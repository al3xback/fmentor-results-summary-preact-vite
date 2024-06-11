import Header from './components/Header/Header.jsx';
import ResultGrid from './components/ResultsGrid/ResultGrid.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<main class='main'>
				<div class='container'>
					<ResultGrid />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
