import React from 'react';
import './skills.css';
import {
	CSSSvg,
	EXPRESSSvg,
	HTMLSvg,
	JAVASvg,
	JSSvg,
	MONGOSvg,
	MYSQLSvg,
	NEXTSvg,
	POSTGRESSvg,
	RAILSSvg,
	REACTSvg,
	RUBYSvg,
	SVELTESvg,
} from './devIcons.js';

function Skills({ shadow }) {
	return (
		<div className="skills-container">
			<h3 style={{ textAlign: 'center' }}>
				<span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>Technical Skills</span>
			</h3>
			<br />
			<div className="languages">
				<h6>Languages:</h6>
				<div className="icons-container">
					<HTMLSvg />
					<CSSSvg />
					<JSSvg />
					<RUBYSvg />
					<JAVASvg />
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
			<br/>
			<div className="languages">
				<h6>Database:</h6>
				<div className="icons-container">
					<MYSQLSvg />
					<MONGOSvg />
					<POSTGRESSvg />
				</div>
			</div>
		</div>
	);
}

export default Skills;
