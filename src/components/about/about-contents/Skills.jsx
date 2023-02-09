import React from 'react';
import './skills.css';
import {
	AESvg,
	CHATGPTSvg,
	CSSSvg,
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

function Skills({ shadow }) {
	const toolTipStyle = {
		height: '10px',
		width: 'auto',
		fontSize: '10px',
	};
	return (
		<div className="skills-container">
			<h3 style={{ textAlign: 'center' }}>
				<span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>Technical Skills</span>
			</h3>
			<br />
			<div className="languages">
				<h6>Languages:</h6>
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
					<div id="ruby" data-tooltip-content="RUBY" data-tooltip-place="bottom">
						<RUBYSvg />
						<Tooltip anchorId="ruby" style={toolTipStyle} />
					</div>
					<div id="css" data-tooltip-content="CSS" data-tooltip-place="bottom">
						<JAVASvg />
						<Tooltip anchorId="css" style={toolTipStyle} />
					</div>
				</div>
			</div>
			<br />

			<div className="languages">
				<h6>Frameworks:</h6>
				<div className="icons-container">
					<REACTSvg />
					<RAILSSvg />
					<EXPRESSSvg />
					<NEXTSvg />
					<SVELTESvg />
				</div>
			</div>
			<br />
			<div className="languages">
				<h6>Database:</h6>
				<div className="icons-container">
					<MYSQLSvg />
					<MONGOSvg />
					<POSTGRESSvg />
				</div>
			</div>
			<br />
			<div className="languages">
				<h6>Tools:</h6>
				<div className="icons-container">
					~
					<VSCODESvg />
					<GITSvg />
					<POSTMANSvg />
					<CHATGPTSvg />
					<AESvg />
				</div>
			</div>
			<br />
		</div>
	);
}

export default Skills;
