import { DiMongodb, DiReact, DiNodejs, DiRuby, DiFirebase } from 'react-icons/di';
import { SiRubygems } from 'react-icons/si';

import { v4 as uuidv4 } from 'uuid';
export const videoLinks = [
	{
		name: 'GoalsToScore',
		url: 'https://youtu.be/aAT7HKS-DdU',
		desc: 'A simple goals management app to create and update goals and their sub-tasks.',
		desc2: 'The app requires a simple authentication, and allows a user to save their goals with tasks related to them. You can later add more tasks as needed and switch the status of each task to either pending or completed which updates in the backend synchronously.',
		links: {
			live: 'https://ajayghimire1998.github.io/GoalsToScore/',
			git: 'https://github.com/AjayGhimire1998/GoalsToScore/',
		},
		tools: [
			<DiReact size={50} key={uuidv4()} />,
			<DiNodejs size={50} key={uuidv4()} />,
			<DiMongodb size={50} key={uuidv4()} />,
		],
	},
	{
		name: 'CryptoMania',
		url: 'https://youtu.be/EYW5ZX8XiWk',
		desc: 'A Ruby CLI gem which runs on terminal, a game where a player can invest money in the past and check on the future, if the player has become successful to double the investment to win or not.',
		desc2: "It allows players to enter the past dates and invest given initial balance into their favourite crypto currencies, read about the currencies, and checkout in any future date they like to, and the program calculates the total earning at last to finalize a winner. It uses 'Nokogiri' to scrape details about the crypto and a crypto API to fetch rates data.",
		links: {
			live: 'https://rubygems.org/search?query=cryptomania',
			git: 'https://github.com/AjayGhimire1998/cryptomania',
		},
		tools: [<DiRuby size={50} key={uuidv4()} />, <SiRubygems size={50} key={uuidv4()} />],
	},
	{
		name: 'MemeBook',
		url: 'https://youtu.be/LEZi-Xbr_U0',
		desc: 'A react app for viewing, uploading, and creating memes, bulit using Jokes Rapid API, Reddit API and ImgFlip API and Firebase to handle Authentication and storage.',
		desc2: 'You can register and login using your email and view the memes in the news feed, set up your profile and be able to upload memes of your own and also create memes with the help of templates generated from FLIPImg API and adding texts of your own or automated jokes from Rapid/JOKES API and also download the newly created meme to your local device and upload it back to the feed for others to see.',
		links: {
			live: 'https://ajayghimire1998.github.io/memebook/',
			git: 'https://github.com/AjayGhimire1998/memebook',
		},
		tools: [<DiReact size={50} key={uuidv4()} />, <DiFirebase size={50} key={uuidv4()} />],
	},
];
