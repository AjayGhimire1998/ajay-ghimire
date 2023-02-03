import React from 'react';
import './skills.css';
import {
	CSSSvg,
	HTMLSvg,
	JAVASvg,
	JSSvg,
	MONGOSvg,
	MYSQLSvg,
	NODESvg,
	POSTGRESSvg,
	RAILSSvg,
	REACTSvg,
	RUBYSvg,
} from './devIcons.js';

function Skills({ shadow }) {
	return (
		<div className="skills-container">
			<h3 style={{ textAlign: 'center' }}>
				<span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>Technical Skills</span>
			</h3>
			<br />
			<div className="languages">
				<h6>Languages, I can code on:</h6>
				<br />
				<div className="icons-container">
					<HTMLSvg />
					<CSSSvg />
					<JSSvg />
					<RUBYSvg />
					<JAVASvg />
				</div>
			</div>
			<br />
			<br />
			<div className="languages">
				<h6>Frameworks, I am familiar with:</h6>
				<br />
				<div className="icons-container">
					<REACTSvg />
					<NODESvg />
					<RAILSSvg />
				</div>
			</div>
			<br />
			<br />
			<div className="languages">
				<h6>Database, I use:</h6>
				<br />
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
