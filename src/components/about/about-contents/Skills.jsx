import React from 'react';
import './skills.css';
import {
	AESvg,
	CHATGPTSvg,
	CSSSvg,
	ECLIPSESvg,
	EXPRESSSvg,
	GITSvg,
	HTMLSvg,
	JAVASvg,
	JSSvg,
	MONGOSvg,
	MYSQLSvg,
	NEXTSvg,
	POSTGRESSvg,
	POSTMANSvg,
	RAILSSvg,
	REACTSvg,
	RUBYSvg,
	SVELTESvg,
	VSCODESvg,
} from './devIcons.js';
import { Tooltip } from 'react-tooltip';

function Skills() {
	const toolTipStyle = {
		height: '10px',
		width: 'auto',
		fontSize: '12px',
	};
	return (
		<div className="skills-container">
			<h3 style={{ textAlign: 'center' }}>
				<span>Technical Skills</span>
			</h3>
			<br/>
			<div className="languages">
				<h4>Languages:</h4>
				<div className="icons-container">
					<div id="html" data-tooltip-content="HTML" data-tooltip-place="bottom">
						<HTMLSvg />
						<Tooltip anchorId="html" style={toolTipStyle} />
					</div>
					<div id="css" data-tooltip-content="CSS" data-tooltip-place="bottom">
						<CSSSvg />
						<Tooltip anchorId="css" style={toolTipStyle} />
					</div>
					<div id="JS" data-tooltip-content="JavaScript" data-tooltip-place="bottom">
						<JSSvg />
						<Tooltip anchorId="JS" style={toolTipStyle} />
					</div>
					<div id="ruby" data-tooltip-content="Ruby" data-tooltip-place="bottom">
						<RUBYSvg />
						<Tooltip anchorId="ruby" style={toolTipStyle} />
					</div>
					<div id="JAVA" data-tooltip-content="Java" data-tooltip-place="bottom">
						<JAVASvg />
						<Tooltip anchorId="JAVA" style={toolTipStyle} />
					</div>
				</div>
			</div>
			<br />

			<div className="languages">
				<h4>Frameworks / Libraries:</h4>
				<div className="icons-container">
					<div id="REACT" data-tooltip-content="React" data-tooltip-place="bottom">
						<REACTSvg />
						<Tooltip anchorId="REACT" style={toolTipStyle} />
					</div>
					<div id="RAILS" data-tooltip-content="Rails" data-tooltip-place="bottom">
						<RAILSSvg />
						<Tooltip anchorId="RAILS" style={toolTipStyle} />
					</div>
					<div id="EXPRESS" data-tooltip-content="Express" data-tooltip-place="bottom">
						<EXPRESSSvg />
						<Tooltip anchorId="EXPRESS" style={toolTipStyle} />
					</div>
					<div id="NEXT" data-tooltip-content="NEXT" data-tooltip-place="bottom">
						<NEXTSvg />
						<Tooltip anchorId="NEXT" style={toolTipStyle} />
					</div>
					<div id="SVELTE" data-tooltip-content="Svelte" data-tooltip-place="bottom">
						<SVELTESvg />
						<Tooltip anchorId="SVELTE" style={toolTipStyle} />
					</div>
				</div>
			</div>
			<br />
			<div className="languages">
				<h4>Database:</h4>
				<div className="icons-container">
					<div id="MySQL" data-tooltip-content="MySQL" data-tooltip-place="bottom">
						<MYSQLSvg />
						<Tooltip anchorId="MySQL" style={toolTipStyle} />
					</div>
					<div id="MongoDB" data-tooltip-content="MongoDB" data-tooltip-place="bottom">
						<MONGOSvg />
						<Tooltip anchorId="MongoDB" style={toolTipStyle} />
					</div>
					<div id="PostgreSQL" data-tooltip-content="PostgreSQL" data-tooltip-place="bottom">
						<POSTGRESSvg />
						<Tooltip anchorId="PostgreSQL" style={toolTipStyle} />
					</div>
				</div>
			</div>
			<br />
			<div className="languages">
				<h4>Tools:</h4>
				<div className="icons-container-tools">
					<div id="VS Code" data-tooltip-content="VS Code" data-tooltip-place="bottom">
						<VSCODESvg />
						<Tooltip anchorId="VS Code" style={toolTipStyle} />
					</div>
					<div id="Eclipse" data-tooltip-content="Eclipse" data-tooltip-place="bottom">
						<ECLIPSESvg />
						<Tooltip anchorId="Eclipse" style={toolTipStyle} />
					</div>
					<div id="GIT" data-tooltip-content="GIT" data-tooltip-place="bottom">
						<GITSvg />
						<Tooltip anchorId="GIT" style={toolTipStyle} />
					</div>
					<div id="Postman" data-tooltip-content="Postman" data-tooltip-place="bottom">
						<POSTMANSvg />
						<Tooltip anchorId="Postman" style={toolTipStyle} />
					</div>
					<div id="ChatGPT" data-tooltip-content="ChatGPT" data-tooltip-place="bottom">
						<CHATGPTSvg />
						<Tooltip anchorId="ChatGPT" style={toolTipStyle} />
					</div>
					<div id="AfterEffects" data-tooltip-content="After Effects" data-tooltip-place="bottom">
						<AESvg />
						<Tooltip anchorId="AfterEffects" style={toolTipStyle} />
					</div>
				</div>
			</div>
			<br />
		</div>
	);
}

export default Skills;
