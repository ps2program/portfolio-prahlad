import { AboutMeProvider } from '../context/AboutMeContext.js';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				{/* Embed the external website using iframe */}
				<iframe
					src="https://prahlad.blog/low%20level%20system%20design/2.splidwise_lld/"
					title="Prahlad.blog"
					className="w-full h-screen border-none"
					allowFullScreen
				></iframe>
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
