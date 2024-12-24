// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
	  title: 'Generative System Design',
	  publishDate: 'Oct 2024',
	  tags: 'LLM, System Design, Graphs',
	},
	ProjectImages: [
	  {
		id: 1,
		title: 'Generative System Design Diagram',
		img: Image1,
	  },
	  {
		id: 2,
		title: 'Generative System Design User Interface',
		img: Image2,
	  },
	  {
		id: 3,
		title: 'Generative System Design in Action',
		img: Image3,
	  },
	],
	ProjectInfo: {
	  ClientHeading: 'About Client',
	  CompanyInfo: [
		{
		  id: 1,
		  title: 'Name',
		  details: 'Generative System Design App',
		},
		{
		  id: 2,
		  title: 'Services',
		  details: 'System Design, LLM Integration, Graph Visualization',
		},
		{
		  id: 3,
		  title: 'Website',
		  details: 'https://generative-system-design.onrender.com',
		},
		{
		  id: 4,
		  title: 'Phone',
		  details: 'N/A',
		},
	  ],
	  ObjectivesHeading: 'Objective',
	  ObjectivesDetails:
		'To create a tool that leverages LLMs for generating system designs across different domains, providing interactive and editable graph-like diagrams.',
	  Technologies: [
		{
		  title: 'Tools & Technologies',
		  techs: [
			'Python',
			'Flask',
			'React',
			'LLMs',
			'Graph Visualization',
			'Docker',
		  ],
		},
	  ],
	  ProjectDetailsHeading: 'Challenge',
	  ProjectDetails: [
		{
		  id: 1,
		  details:
			'Developed a dynamic system design generation tool that can generate editable system diagrams using LLMs, empowering users to visualize complex architectures.',
		},
		{
		  id: 2,
		  details:
			'Integrated LLMs with interactive graph visualization to allow seamless creation and modification of system designs, ranging from software to machines.',
		},
		{
		  id: 3,
		  details:
			'Ensured that the generated diagrams are not static, enabling users to interact with and modify the system design to suit their requirements.',
		},
	  ],
	  SocialSharingHeading: 'Share This',
	  SocialSharing: [
		{
		  id: 1,
		  name: 'Twitter',
		  icon: <FiTwitter />,
		  url: 'https://prahlad.pro/',
		},
		{
		  id: 2,
		  name: 'Instagram',
		  icon: <FiInstagram />,
		  url: 'https://prahlad.pro/',
		},
		{
		  id: 3,
		  name: 'Facebook',
		  icon: <FiFacebook />,
		  url: 'https://prahlad.pro/',
		},
		{
		  id: 4,
		  name: 'LinkedIn',
		  icon: <FiLinkedin />,
		  url: 'https://prahlad.pro/',
		},
		{
		  id: 5,
		  name: 'Youtube',
		  icon: <FiYoutube />,
		  url: 'https://prahlad.pro/',
		},
	  ],
	},
	RelatedProject: {
	  title: 'Related Projects',
	  Projects: [
		{
		  id: 1,
		  title: 'Generative Science',
		  img: Image4,
		},
		{
		  id: 2,
		  title: 'AI-Insight',
		  img: Image5,
		},
		{
		  id: 3,
		  title: 'Chat Application Using LLMs and Generative AI',
		  img: Image6,
		},
		{
		  id: 4,
		  title: 'Web Application for Simulation Software',
		  img: Image3,
		},
	  ],
	},
  };
  

// export const singleProjectData = {
// 	ProjectHeader: {
// 		title: 'Project Management UI',
// 		publishDate: 'Jul 26, 2021',
// 		tags: 'UI / Frontend',
// 	},
// 	ProjectImages: [
// 		{
// 			id: 1,
// 			title: 'Kabul Project Management UI',
// 			img: Image1,
// 		},
// 		{
// 			id: 2,
// 			title: 'Kabul Project Management UI',
// 			img: Image2,
// 		},
// 		{
// 			id: 3,
// 			title: 'Kabul Project Management UI',
// 			img: Image3,
// 		},
// 	],
// 	ProjectInfo: {
// 		ClientHeading: 'About Client',
// 		CompanyInfo: [
// 			{
// 				id: 1,
// 				title: 'Name',
// 				details: 'Company Ltd',
// 			},
// 			{
// 				id: 2,
// 				title: 'Services',
// 				details: 'UI Design & Frontend Development',
// 			},
// 			{
// 				id: 3,
// 				title: 'Website',
// 				details: 'https://company.com',
// 			},
// 			{
// 				id: 4,
// 				title: 'Phone',
// 				details: '555 8888 888',
// 			},
// 		],
// 		ObjectivesHeading: 'Objective',
// 		ObjectivesDetails:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
// 		Technologies: [
// 			{
// 				title: 'Tools & Technologies',
// 				techs: [
// 					'HTML',
// 					'CSS',
// 					'JavaScript',
// 					'Vue.js',
// 					'TailwindCSS',
// 					'AdobeXD',
// 				],
// 			},
// 		],
// 		ProjectDetailsHeading: 'Challenge',
// 		ProjectDetails: [
// 			{
// 				id: 1,
// 				details:
// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
// 			},
// 			{
// 				id: 2,
// 				details:
// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
// 			},
// 			{
// 				id: 3,
// 				details:
// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
// 			},
// 			{
// 				id: 4,
// 				details:
// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
// 			},
// 		],
// 		SocialSharingHeading: 'Share This',
// 		SocialSharing: [
// 			{
// 				id: 1,
// 				name: 'Twitter',
// 				icon: <FiTwitter />,
// 				url: 'https://prahlad.pro/',
// 			},
// 			{
// 				id: 2,
// 				name: 'Instagram',
// 				icon: <FiInstagram />,
// 				url: 'https://prahlad.pro/',
// 			},
// 			{
// 				id: 3,
// 				name: 'Facebook',
// 				icon: <FiFacebook />,
// 				url: 'https://prahlad.pro/',
// 			},
// 			{
// 				id: 4,
// 				name: 'LinkedIn',
// 				icon: <FiLinkedin />,
// 				url: 'https://prahlad.pro/',
// 			},
// 			{
// 				id: 5,
// 				name: 'Youtube',
// 				icon: <FiYoutube />,
// 				url: 'https://prahlad.pro/',
// 			},
// 		],
// 	},
// 	RelatedProject: {
// 		title: 'Related Projects',
// 		Projects: [
// 			{
// 				id: 1,
// 				title: 'Mobile UI',
// 				img: Image4,
// 			},
// 			{
// 				id: 2,
// 				title: 'Web Application',
// 				img: Image5,
// 			},
// 			{
// 				id: 3,
// 				title: 'UI Design',
// 				img: Image6,
// 			},
// 			{
// 				id: 4,
// 				title: 'Kabul Mobile App UI',
// 				img: Image3,
// 			},
// 		],
// 	},
// };
