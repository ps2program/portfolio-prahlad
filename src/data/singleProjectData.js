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
  
