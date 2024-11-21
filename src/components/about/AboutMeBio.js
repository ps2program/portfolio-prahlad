import profileImage from '../../images/profile.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			{/* About me portfolio image start */}
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="Prahlad Sahu" />
			</div>
			{/* About me portfolio image end */}

			{/* About me details start */}
			<div className="w-full sm:w-3/4 text-left">
				{/* About Me Section */}
				<h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
					About Me
				</h2>
				<p className="mb-6 text-ternary-dark dark:text-ternary-light text-lg">
					I’m <strong>Prahlad Sahu</strong>, a passionate <strong>Full-Stack Web Developer</strong> with over four years of experience, specializing in <strong>Generative AI</strong> and cutting-edge web technologies. My journey has been defined by a relentless pursuit of innovation and an unwavering commitment to excellence.
				</p>

				{/* What I Do Section */}
				<h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
					What I Do
				</h3>
				<p className="mb-6 text-ternary-dark dark:text-ternary-light text-lg">
					I leverage my deep expertise in <strong>JavaScript, Python, C++,</strong> and <strong>C#</strong> to design and implement scalable, AI-driven solutions that seamlessly integrate advanced workflows across frontend and backend systems. My projects are not only technically robust but also user-centered, ensuring exceptional experiences for end users.
				</p>

				{/* Notable Achievements Section */}
				<h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
					Notable Achievements
				</h3>
				<ul className="list-disc list-inside mb-6 text-ternary-dark dark:text-ternary-light text-lg">
					<li>
						<strong>Patent Holder for GSLV Mark 3:</strong> Proudly collaborated with <strong>ISRO</strong> on projects that exemplify technological ingenuity.
					</li>
					<li>
						Delivered highly scalable AI-powered applications, redefining performance benchmarks for modern web systems.
					</li>
					<li>
						Expertise in utilizing <strong>large language models (LLMs)</strong> to build intelligent, adaptive interfaces and backend solutions.
					</li>
				</ul>

				{/* My Passion Section */}
				<h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
					My Passion
				</h3>
				<p className="mb-6 text-ternary-dark dark:text-ternary-light text-lg">
					Whether it's designing a sophisticated AI-driven application or enhancing user engagement through innovative interfaces, I am driven by a desire to push boundaries and harness the transformative potential of <strong>Generative AI</strong>.
				</p>

				{/* Let's Connect Section */}
				<h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
					Let’s Connect
				</h3>
				<p className="text-ternary-dark dark:text-ternary-light text-lg">
					I’m always eager to collaborate on groundbreaking projects that challenge the status quo. Feel free to connect with me to explore ideas, share insights, or discuss opportunities to innovate together!
				</p>
			</div>
			{/* About me details end */}
		</div>
	);
};

export default AboutMeBio;
