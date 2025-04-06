import { AboutMeProvider } from '../context/AboutMeContext.js';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto text-center py-20"
			>
				<h1 className="text-3xl font-bold mb-6">Visit My Blog</h1>
				<a
					href="https://prahlad.blog/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 underline text-xl hover:text-blue-800"
				>
					Open prahlad.blog in a new tab
				</a>
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
