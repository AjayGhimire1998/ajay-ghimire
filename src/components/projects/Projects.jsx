
import './projects.css';
import { videoLinks } from './projects-data';
import ProjectItem from './ProjectItem';

function Projects({ hover, play }) {
	const projects = videoLinks.map((project) => {
		return <ProjectItem project={project} hover={hover} play={play} />;
	});
	return (
		<div className="projects-container">
			<div className="projects">{projects}</div>
		</div>
	);
}

export default Projects;
