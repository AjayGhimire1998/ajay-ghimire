import {
	DiMongodb,
	DiReact,
	DiNodejs,
	DiRuby,
	DiFirebase,
	DiHtml5,
	DiCss3,
	DiJavascript1,
	DiPostgresql,
} from 'react-icons/di';
import { SiRubygems, SiRubyonrails } from 'react-icons/si';

import { v4 as uuidv4 } from 'uuid';
export const videoLinks = [
	{
		name: 'WithLoveFromHome',
		url: 'https://youtu.be/IEl0hS8OP2k',
		desc: 'A full-stack E-commerce web application built using React for the front end and Rails to develop the server.',
		desc2: 'It allows users to register as a store who can create products to sell and also allows users to register as a customer who can choose through the products to add to cart and checkout. Customers can leave reviews to the products and the stores. The store and customer get notified when an order is made or its status has changed through email.',
		links: {
			git: 'https://github.com/AjayGhimire1998/with-love-from-home',
		},
		tools: [
			<DiReact size={50} key={uuidv4()} />,
			<SiRubyonrails size={50} key={uuidv4()} />,
			<DiPostgresql size={50} key={uuidv4()} />,
		],
	},
	{
		name: 'GoalsToScore',
		url: 'https://youtu.be/aAT7HKS-DdU',
		desc: 'A simple goals management app to create and update goals and their sub-tasks.',
		desc2: 'The app requires a simple authentication, and allows a user to save their goals with tasks related to them. They can later add more tasks as needed and switch the status of each task to either pending or completed which updates in the backend synchronously.',
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
		name: 'MemeBook',
		url: 'https://youtu.be/JTJ3IyiqIqk',
		desc: 'A react app for viewing, uploading, and creating memes, built using Jokes Rapid API, Reddit API and ImgFlip API and Firebase to handle Authentication and storage.',
		desc2: 'Users can register and login using their email and view the memes in the news feed, set up their profile and be able to upload memes of their own and also create memes with the help of templates generated from FLIPImg API and adding texts of their own or automated jokes from Rapid/JOKES API and also download the newly created meme to their local device and upload it back to the feed for others to see.',
		links: {
			live: 'https://ajayghimire1998.github.io/memebook/',
			git: 'https://github.com/AjayGhimire1998/memebook',
		},
		tools: [<DiReact size={50} key={uuidv4()} />, <DiFirebase size={50} key={uuidv4()} />],
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
		name: 'PlayMates',
		url: 'https://youtu.be/HV8v0qiuvtI',
		desc: 'A Ruby on Rails app with user authentication that allows users to view and upload gaming contents like images and videos as posts and live chat with other users to team up to play video games of their similar choices.',
		desc2: 'The users can register and login using their email and view the gaming contents posted in the feed, set up their profile and be able to contents of their own, create a category their posts would belong to, and use it to filter the relative contents on that category. They can also team up with others directly through a chat system.',
		links: {
			git: 'https://github.com/AjayGhimire1998/Play-Mates',
		},
		tools: [<DiRuby size={50} key={uuidv4()} />, <SiRubyonrails size={50} key={uuidv4()} />],
	},
	{
		name: 'Movie-Finder',
		url: 'https://youtu.be/L78bUwIzYYo',
		desc: 'A JavaScript web application built with OMDB and YOUTUBE API.',
		desc2: 'The users can search for a movie with its title name and get all information about the selected movie and also watch the trailer of the movie from youtube.',
		links: {
			live: 'https://ajayghimire1998.github.io/Movie-Finder/',
			git: 'https://github.com/AjayGhimire1998/Movie-Finder',
		},
		tools: [
			<DiJavascript1 size={50} key={uuidv4()} />,
			<DiHtml5 size={50} key={uuidv4()} />,
			<DiCss3 size={50} key={uuidv4()} />,
		],
	},
];
