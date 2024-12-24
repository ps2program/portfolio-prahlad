// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
	  id: 1,
	  title: 'Generative System Design',
	  category: 'Web Application',
	  img: WebImage2,
	  ProjectHeader: {
		title: 'Generative System Design',
		publishDate: 'Oct 2024',
		tags: 'LLM, System Design, Graphs',
	  },
	  description: 'Developed an application that uses LLMs to generate system designs for various domains (software, machines, etc.), providing editable and dynamic graph-like diagrams.',
	  url: 'https://generative-system-design.onrender.com',
	},
	{
	  id: 2,
	  title: 'Generative Science',
	  category: 'Research Tool',
	  img: MobileImage2,
	  ProjectHeader: {
		title: 'Generative Science',
		publishDate: '',
		tags: 'Research, LLM, RAG',
	  },
	  description: 'Developed a vector database of all publicly available research papers globally, integrated Retrieval-Augmented Generation (RAG) for efficient document retrieval, and leveraged LLMs for comprehensive research query responses.',
	  url: 'https://prahlad.pro/',
	},
	{
	  id: 3,
	  title: 'AI-Insight',
	  category: 'Machine Learning',
	  img: UIImage1,
	  ProjectHeader: {
		title: 'AI-Insight',
		publishDate: '2023',
		tags: 'Machine Learning, Simulation',
	  },
	  description: 'Designed a machine learning model that analyzes simulation data to predict outcomes without re-running FEA calculations, improving efficiency by reducing computation time and resources.',
	  url: 'https://prahlad.pro/',
	},
	{
	  id: 4,
	  title: 'Chat Application Using LLMs and Generative AI',
	  category: 'Web Application',
	  img: UIImage2,
	  ProjectHeader: {
		title: 'Chat Application Using LLMs',
		publishDate: '',
		tags: 'LLM, AI, FastAPI',
	  },
	  description: 'Developed an intelligent chat application using LLMs for context-aware conversations, integrated generative AI workflows for enhanced user interaction, and deployed using FastAPI for scalability and performance.',
	  url: 'https://prahlad.pro/',
	},
	{
	  id: 5,
	  title: 'Web Application for Simulation Software (Competitor to Ansys Discovery)',
	  category: 'Web Application',
	  img: MobileImage1,
	  ProjectHeader: {
		title: 'Web Simulation App',
		publishDate: '2022 - 2024',
		tags: 'Simulation, Web Development, C++',
	  },
	  description: 'Developed a comprehensive web application for mechanical, thermal, and fluid simulations with a C++ backend, competing with Ansys Discovery, optimized for large-scale simulations.',
	  url: 'https://prahlad.pro/',
	},
	{
	  id: 6,
	  title: 'SolidWorks Code Generation Co-Pilot',
	  category: 'Automation Tool',
	  img: WebImage1,
	  ProjectHeader: {
		title: 'SolidWorks Code Generation',
		publishDate: '',
		tags: 'Automation, CAD, SolidWorks API',
	  },
	  description: 'Automated CAD model creation using SolidWorks API and LLMs, created a vector database for API docs to enhance code generation.',
	  url: 'http://prahlad.pro',
	},
	{
	  id: 7,
	  title: 'Portfolio Website & Blog',
	  category: 'Web Application',
	  img: WebImage2,
	  ProjectHeader: {
		title: 'Portfolio & Blog',
		publishDate: '',
		tags: 'Web Development, React, Flask',
	  },
	  description: 'Developed an interactive portfolio showcasing professional projects and blog posts, using React, mkdocs, and Flask.',
	  url: 'http://prahlad.pro',
	},
  ];
  

// export const projectsData = [
// 	{
// 		id: 1,
// 		title: 'Google Health Platform',
// 		category: 'Web Application',
// 		img: WebImage2,
// 		ProjectHeader: {
// 			title: 'Project Management UI - From Context',
// 			publishDate: 'Jul 26, 2021',
// 			tags: 'UI / Frontend',
// 		},
// 	},
// 	{
// 		id: 2,
// 		title: 'Phoenix Digital Agency',
// 		category: 'Mobile Application',
// 		img: MobileImage2,
// 	},
// 	{
// 		id: 3,
// 		title: 'Project Management UI',
// 		category: 'UI/UX Design',
// 		img: UIImage1,
// 	},
// 	{
// 		id: 4,
// 		title: 'Cloud Storage Platform',
// 		category: 'UI/UX Design',
// 		img: UIImage2,
// 	},
// 	{
// 		id: 5,
// 		title: 'React Social App',
// 		category: 'Mobile Application',
// 		img: MobileImage1,
// 	},
// 	{
// 		id: 6,
// 		title: 'Apple Design System',
// 		category: 'Web Application',
// 		img: WebImage1,
// 	},
// ];
