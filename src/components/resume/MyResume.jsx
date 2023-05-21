import React from 'react';
import myResume from '../../images/ajayghimire_resume_2023.pdf';
import './my-resume.css';

function MyResume({ play, hover }) {
	return (
		<div className="resume-container">
			<div className="my-resume-container">
				<iframe src={myResume + '#toolbar=0'} title="Ajay_Ghimire_Resume" className="my-resume" />
			</div>
			<div className="download-button-container">
				<a
					href={myResume}
					className="nav-button download"
					onClick={play}
					onMouseOver={hover}
					download="Ajay_Ghimire_Resume-2023.pdf"
				>
					Download
				</a>
			</div>
		</div>
	);
}

export default MyResume;
