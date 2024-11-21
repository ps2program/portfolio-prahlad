const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
];

const ProjectsFilter = ({ setSelectProject, selectedProject }) => {
	return (
		<select
			value={selectedProject}  // Bind the selected project to the <select> value
			onChange={(e) => {
				setSelectProject(e.target.value);  // Update the state with the selected value
			}}
			className="
				px-4
				sm:px-6
				py-2
				border
				dark:border-secondary-dark
				rounded-lg
				text-sm
				sm:text-md
				dark:font-medium
				bg-secondary-light
				dark:bg-ternary-dark
				text-primary-dark
				dark:text-ternary-light
			"
		>
			{/* Default option */}
			<option value="" className="text-sm sm:text-md">
				All Projects
			</option>

			{/* Map through the options */}
			{selectOptions.map((option) => (
				<option value={option} className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
