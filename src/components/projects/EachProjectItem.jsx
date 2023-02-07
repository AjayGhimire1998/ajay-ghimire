import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './each-project-item.css';
import ReactPlayer from 'react-player';
import AboutItem from '../about/about-contents/AboutItem';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { videoLinks } from './projects-data';

function EachProjectItem({ shadow, play, hover }) {
	const [project, setProject] = useState(videoLinks[0]);
	const navigate = useNavigate();
	const { name } = useParams();
	console.log(name)
	const onLinkClick = (link) => {
		play();
		window.open(link, '_blank');
	};

	useEffect(() => {
		const video = videoLinks[0]
		setProject(video);
	}, [name]);

	console.log(project);

	return (
		<>
			<div className="project-item-container">
				<h3 style={{ textAlign: 'center' }}>
					<span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>{project.name}</span>
				</h3>
				<br />
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
					<h5 style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>Tools Used:</h5>
					{project.tools.map((lan) => lan)}
				</div>
			</div>
		</>
	);
}

export default EachProjectItem;
