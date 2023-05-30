import { useNavigate } from 'react-router-dom';
import './logo.css';

function Logo({ logo, shadow, play }) {
	const navigate = useNavigate();
	return (
		<div className="logo-container">
			<img
				src={logo}
				alt="logo"
				className="logo shadow"
				style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
				onClick={() => {
					play();
					navigate('/');
				}}
			/>
		</div>
	);
}

export default Logo;
