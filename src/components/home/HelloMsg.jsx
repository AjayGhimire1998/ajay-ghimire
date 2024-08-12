import React from 'react';
import Typewriter from 'typewriter-effect';
import './hello-message.css';
import wave from '../../images/wave.gif';

function HelloMsg() {
	return (
		<section className="typewriter">
			<Typewriter
				options={{
					strings: [
						`<span style="color:#00ccff">console</span>.<span style="color:#ffff00">log</span><span style="color:#ff00ff">(</span><span style="color:#cc6600 ">"Hello World !"</span><span style="color:#ff00ff">)</span>;`,
						`<span style="color:#cc6600">System</span>.<b><i><span style="color:#80dfff">out</span></i></b>.<span style="color:#99ff33">println</span>(<span style="color:#00cc00">"Hello World !"</span>);`,
						`<span style="color:#ffff00">puts</span> <span style="color:#ff9900 ">"Hello World !"</span>`,
					],
					delay: 60,
					autoStart: true,
					loop: true,
					deleteSpeed: 100,
				}}
			/>
			<img src={wave} alt="waving hand" className="wave" />
		</section>
	);
}

export default HelloMsg;
