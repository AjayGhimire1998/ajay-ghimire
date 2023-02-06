import React from 'react';

function NoMatch() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<p style={{ color: 'white', fontSize: '20px' }}>
				<span style={{ color: 'yellow', textAlign: 'center' }}>OOOPSS...</span>Page not found
			</p>
		</div>
	);
}

export default NoMatch;
