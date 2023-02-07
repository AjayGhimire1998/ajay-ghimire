import { useState } from 'react';
import './projects.css';
import { videoLinks } from './projects-data';
import EachProjectItem from './EachProjectItem';
import { useEffect } from 'react';
import ProjectItem from './ProjectItem';

function Projects({ shadow, hover, play }) {
	const [pageCount, setPageCount] = useState(0);

	// const allProjects = videoLinks.map((item) => {
	// 	return (
	// 		<EachProjectItem
	// 			shadow={shadow}
	// 			name={item.name}
	// 			url={item.url}
	// 			desc={item.desc}
	// 			desc2={item.desc2}
	// 			links={item.links}
	// 			tools={item.tools}
	// 			play={play}
	// 			hover={hover}
	// 		/>
	// 	);
	// });

	const projects = videoLinks.map((project) => {
		return <ProjectItem project={project} />;
	});

	const onPrevClick = () => {
		play();
		setPageCount(pageCount - 1);
		localStorage.setItem('projects_page_count', JSON.stringify(pageCount - 1));
	};

	const onNextClick = () => {
		play();
		setPageCount(pageCount + 1);
		localStorage.setItem('projects_page_count', JSON.stringify(pageCount + 1));
	};

	useEffect(() => {
		setPageCount(JSON.parse(localStorage.getItem('projects_page_count')) || 0);
	}, []);
	return (
		<div className="projects-container">
			{/* {allProjects[pageCount]}
			<br />
			<br />
			<div className="about-buttons">
				<button
					className="nav-button previous"
					onMouseOver={hover}
					onClick={onPrevClick}
					disabled={pageCount === 0}
				>
					Previous
				</button>
				<button
					className="nav-button next"
					onMouseOver={hover}
					onClick={onNextClick}
					disabled={pageCount === allProjects.length - 1}
				>
					Next
				</button>
			</div> */}
			<div className="projects">{projects}</div>
		</div>
	);
}

export default Projects;
