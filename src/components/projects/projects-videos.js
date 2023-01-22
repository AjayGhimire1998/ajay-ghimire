import { DiMongodb, DiReact, DiNodejs } from 'react-icons/di';

import { v4 as uuidv4 } from 'uuid';
export const videoLinks = [
	{
		name: 'GoalsToScore',
		url: 'https://youtu.be/aAT7HKS-DdU',
		desc: 'A simple goals management app to create and update goals and their sub-tasks.',
		desc2: 'The app requires a simple authentication, and allows a user to save their goals with tasks related to them. You can later add more tasks as needed and switch the status of each task to either pending or completed which updates in the backend synchronously.',
		links: {
			live: 'https://ajayghimire1998.github.io/GoalsToScore/',
			git: 'https://github.com/AjayGhimire1998/GoalsToScore',
		},
		tools: [
			<DiReact size={50} key={uuidv4()} />,
			<DiNodejs size={50} key={uuidv4()} />,
			<DiMongodb size={50} key={uuidv4()} />,
		],
	},
];
