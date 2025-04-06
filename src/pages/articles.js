import { AboutMeProvider } from '../context/AboutMeContext.js';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto px-4 py-8"
			>
				{/* Button to open blog in a new tab */}
				<div className="flex justify-center mb-6">
					<a
						href="https://prahlad.blog/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
					>
						Open prahlad.blog in a new tab
					</a>
				</div>

				{/* Embedded preview of the blog */}
				<iframe
					src="https://prahlad.blog/"
					title="Prahlad.blog"
					className="w-full h-screen border rounded-lg shadow"
					allowFullScreen
				></iframe>
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
