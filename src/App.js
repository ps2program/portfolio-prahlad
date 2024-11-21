import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import About from './pages/AboutMe';
import Articles from './pages/articles'; // Adjust this to match the file's exact name
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import { AnimatePresence } from 'framer-motion';
import UseScrollToTop from './hooks/useScrollToTop';

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route
							path="projects/single-project"
							element={<ProjectSingle />}
						/>

						<Route path="about" element={<About />} />
						<Route path="articles" element={<Articles />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
