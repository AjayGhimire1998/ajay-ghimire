import { useEffect, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import useSound from 'use-sound';
import click from './sounds/click.wav';
import hover from './sounds/hover.mp3';
import logo1 from './images/logo.png';
import logo2 from './images/logo2.png';
import Home from './pages/home/Home';
import Logo from './components/home/Logo';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Blog from './pages/blog/Blog';

function App() {
	const [play] = useSound(click);
	const [onHover] = useSound(hover);

	let shadows = useMemo(() => [], []);
	shadows = ['#80dfff', '#cc6600', '#00ccff', '#cc6600', '#00cc00', '#ffff00', '#ff00ff', '#ff9900'];
	let logos = useMemo(() => [], []);
	logos = [logo1, logo2];

	const [shadow, setShadow] = useState('');
	const [logo, setLogo] = useState(logos[0]);

	const changeColors = () => {
		setTimeout(() => {
			setShadow(shadows[Math.floor(Math.random() * (7 - 0) + 0)]);
			changeColors();
		}, 1000);
	};

	const changeLogo = () => {
		setTimeout(() => {
			setLogo(logos[Math.floor(Math.random() * (2 - 0) + 0)]);
			changeLogo();
		}, 1000);
	};

	useEffect(() => {
		changeColors();
		changeLogo();
		// window.onbeforeunload = () => {
		// 	localStorage.clear();
		// };
	}, []);

	return (
		<>
			<div className="space"></div>
			<div className="main">
				<Logo logo={logo} shadow={shadow} />
				<Routes>
					<Route path="/" element={<Home shadow={shadow} />} />
					<Route path="/about" element={<About shadow={shadow} play={play} hover={onHover} />} />
					<Route path="/projects" element={<Project shadow={shadow} play={play} hover={onHover} />} />
					<Route path="/contact" element={<Contact shadow={shadow} play={play} hover={onHover} />} />
					<Route path="/blogs" element={<Blog shadow={shadow} play={play} hover={onHover} />} />
					<Route path="/resume" element={<Resume shadow={shadow} play={play} hover={onHover} />} />
				</Routes>
				<br />
				<br />
				<Navbar play={play} hover={onHover} />
				<br />
				<br />
				<br />
				<br />
				<footer className="footer">
					<p style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>© 2023 Ajay Ghimire</p>
				</footer>
			</div>
		</>
	);
}

export default App;
