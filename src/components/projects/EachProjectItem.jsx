import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './each-project-item.css';
import ReactPlayer from 'react-player';
import AboutItem from '../about/about-contents/AboutItem';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { videoLinks } from './projects-data';

function EachProjectItem({ hover, play }) {
	const navigate = useNavigate();
	const { name } = useParams();
	const [project, setProject] = useState(videoLinks.find((vid) => vid.name === name));
	const [indexOfProject, setIndexOfProject] = useState(videoLinks.indexOf(project));

	const onLinkClick = (link) => {
		window.open(link, '_blank');
	};

	const onPrevClick = () => {
		play();
		setIndexOfProject(indexOfProject - 1);
		navigate(`/projects/${videoLinks[indexOfProject - 1].name}`);
	};

	const onNextClick = () => {
		play();
		setIndexOfProject(indexOfProject + 1);
		navigate(`/projects/${videoLinks[indexOfProject + 1].name}`);
	};

	useEffect(() => {
		setProject(videoLinks.find((vid) => vid.name === name));
		document.body.scrollTop = 0; 
		document.documentElement.scrollTop = 0;

	}, [name]);

	console.log(indexOfProject);
	return (
		<div className="project-item-container">
			<br />
			<h3 style={{ textAlign: 'center' }}>
				<span>{project.name}</span>
			</h3>
			<div className="project-video">
				<ReactPlayer url={project.url} className="video" playing={true} muted={true} controls={true} />
			</div>
			<br />
			<div className="links">
				{project.links.live ? (
					<AiOutlineLink
						size={40}
						onMouseOver={hover}
						onClick={() => {
							onLinkClick(project.links.live);
						}}
						className="link-button"
					/>
				) : null}
				<AiOutlineGithub
					size={40}
					onMouseOver={hover}
					onClick={() => {
						onLinkClick(project.links.git);
					}}
					className="link-button"
				/>
			</div>
			<div className="project-desc">
				<AboutItem desc={project.desc} desc2={project.desc2} />
			</div>
			<br />
			<div className="tools-used">
				<h5 style={{ textAlign: 'center' }}>Tools Used:</h5>
				{project.tools.map((lan) => lan)}
			</div>
			<br />
			<br />
			<div className="about-buttons" style={{ width: '100%' }}>
				<button
					className="nav-button previous"
					onMouseOver={hover}
					onClick={onPrevClick}
					disabled={indexOfProject === 0}
				>
					Previous
				</button>
				<button
					className="nav-button next"
					onMouseOver={hover}
					onClick={onNextClick}
					disabled={indexOfProject === videoLinks.length - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default EachProjectItem;
