import { Tooltip } from "react-tooltip";
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
  DiJava,
  
} from "react-icons/di";
import {
  SiRubygems,
  SiRubyonrails,
  SiNextdotjs,
  SiTailwindcss,
  SiSvelte,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import with_love from "../../images/projects/with_love.png";
import movie from "../../images/projects/movie.png";
import mates from "../../images/projects/mates.png";
import memebook from "../../images/projects/memebook.png";
import crypto from "../../images/projects/crypto.png";
import goal from "../../images/projects/goal.png";
import yout from "../../images/projects/yout.png";
import javaMovie from "../../images/projects/java-movie.png";
import qr from "../../images/projects/qr.png";

const toolTipStyle = {
  height: "10px",
  width: "auto",
  fontSize: "12px",
};
export const videoLinks = [
  {
    name: "Chhittoo QR MENU ORDERING",
    url: "https://youtu.be/l2yXVNDnhbA",
    thumbnail: qr,
    videoId: "l2yXVNDnhbA",
    desc: [
      "A B2B SaaS Contactless QR Table Ordering System for cafes, restaurants and hotels to reduce the need for physical menus, and promote online ordering.",
      "It allows venues to register, create menu with items to sell and also create a dynamic customizable website that is accessible by a qr code generated. It also allows users to register as a customer who can choose through the items to order and checkout. The venue and customer get notified when an order is made or its status has changed.",
    ],
    // desc2:
    //   "It allows users to register as a store who can create products to sell and also allows users to register as a customer who can choose through the products to add to cart and checkout. Customers can leave reviews to the products and the stores. The store and customer get notified when an order is made or its status has changed through email.",
    links: {
      git: "https://github.com/AjayGhimire1998/qrCodeToSiteDev",
      live: "https://qrordering.netlify.app/home",
    },
    tools: [
      <div
        id="REACT"
        data-tooltip-content="React"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiReact size={50} />
        <Tooltip anchorId="REACT" style={toolTipStyle} />
      </div>,
      <div
        id="Sveletekit"
        data-tooltip-content="Sveletekit"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <SiSvelte size={50} />
        <Tooltip anchorId="Sveletekit" style={toolTipStyle} />
      </div>,
      <div
        id="PostgreSQL"
        data-tooltip-content="PostgreSQL"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiPostgresql size={50} />
        <Tooltip anchorId="PostgreSQL" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "WithLoveFromHome",
    url: "https://youtu.be/IEl0hS8OP2k",
    thumbnail: with_love,
    videoId: "IEl0hS8OP2k",
    desc: [
      "A full-stack E-commerce web application developed using React for UI and Rails for server.",
      "It allows users to register as a store who can create products to sell and also allows users to register as a customer who can choose through the products to add to cart and checkout. Customers can leave reviews to the products and the stores. The store and customer get notified when an order is made or its status has changed through email. ",
    ],
    // desc2:
    //   "It allows users to register as a store who can create products to sell and also allows users to register as a customer who can choose through the products to add to cart and checkout. Customers can leave reviews to the products and the stores. The store and customer get notified when an order is made or its status has changed through email.",
    links: {
      git: "https://github.com/AjayGhimire1998/with-love-from-home-frontend",
      live: "https://with-love-from-home.netlify.app/",
    },
    tools: [
      <div
        id="REACT"
        data-tooltip-content="React"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiReact size={50} />
        <Tooltip anchorId="REACT" style={toolTipStyle} />
      </div>,
      <div
        id="Rails"
        data-tooltip-content="Rails"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <SiRubyonrails size={50} />
        <Tooltip anchorId="Rails" style={toolTipStyle} />
      </div>,
      <div
        id="PostgreSQL"
        data-tooltip-content="PostgreSQL"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiPostgresql size={50} />
        <Tooltip anchorId="PostgreSQL" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "Java Movie Finder App",
    url: "https://youtu.be/Jm_onL5X8Gk",
    thumbnail: javaMovie,
    videoId: "L78bUwIzYYo",
    desc: [
      "A dynamic java web application developed using java servlets and jsp.",
      "It allows users to search for movies and tv-shows from all around the world, see their details such as plot, year of release, imdb rating, etc. One can save movies to their favourites. Favourites feature utilises Java Database Connectivity to a PostgreSQL instance, where all favourite movies and shows are saved and retrieved from.",
    ],
    // desc2:
    //   "It allows users to search for movies and tv-shows from all around the world, see their details such as plot, year of release, imdb rating, etc. One can save movies to their favourites. Favourites feature utilises Java Database Connectivity to a PostgreSQL instance, where all favourite movies and shows are saved and retrieved from.",
    links: {
      git: "https://github.com/AjayGhimire1998/first-java-web-app",
      live: "https://ajayghimire1998.github.io/Movie-Finder/",
    },
    tools: [
      <div
        id="JAVA"
        data-tooltip-content="Java"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiJava size={50} />
        <Tooltip anchorId="JAVA" style={toolTipStyle} />
      </div>,
      <div
        id="PostgreSQL"
        data-tooltip-content="PostgreSQL"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiPostgresql size={50} />
        <Tooltip anchorId="PostgreSQL" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "GoalsToScore",
    url: "https://youtu.be/aAT7HKS-DdU",
    videoId: "aAT7HKS-DdU",
    thumbnail: goal,
    desc: [
      "A MERN stack app for effective goals management, allowing for creation and updates of goals and sub-tasks.",
      "The app requires a simple authentication, and allows a user to save their goals with tasks related to them. They can later add more tasks as needed and switch the status of each task to either pending or completed which updates in the backend synchronously.",
    ],
    // desc2:
    //   "The app requires a simple authentication, and allows a user to save their goals with tasks related to them. They can later add more tasks as needed and switch the status of each task to either pending or completed which updates in the backend synchronously.",
    links: {
      live: "https://goals-to-score.netlify.app/",
      git: "https://github.com/AjayGhimire1998/goals-to-score",
    },
    tools: [
      <div
        id="REACT"
        data-tooltip-content="React"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiReact size={50} />
        <Tooltip anchorId="REACT" style={toolTipStyle} />
      </div>,
      <div
        id="Node"
        data-tooltip-content="Node"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiNodejs size={50} />,
        <Tooltip anchorId="Node" style={toolTipStyle} />
      </div>,
      <div
        id="MongoDB"
        data-tooltip-content="MongoDB"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiMongodb size={50} />,
        <Tooltip anchorId="MongoDB" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "Memebook",
    url: "https://youtu.be/JTJ3IyiqIqk",
    videoId: "JTJ3IyiqIqk",
    thumbnail: memebook,
    desc: [
      "A React app with user authentication, allowing users to view, upload, and create memes using multiple APIs and Firebase for authentication and storage.",
      "Users can register and login using their email and view the memes in the news feed, set up their profile and be able to upload memes of their own and also create memes with the help of templates generated from FLIPImg API and adding texts of their own or automated jokes from Rapid/JOKES API and also download the newly created meme to their local device and upload it back to the feed for others to see.",
    ],
    // desc2:
    //   "Users can register and login using their email and view the memes in the news feed, set up their profile and be able to upload memes of their own and also create memes with the help of templates generated from FLIPImg API and adding texts of their own or automated jokes from Rapid/JOKES API and also download the newly created meme to their local device and upload it back to the feed for others to see.",
    links: {
      live: "https://ajayghimire1998.github.io/memebook/",
      git: "https://github.com/AjayGhimire1998/memebook",
    },
    tools: [
      <div
        id="REACT"
        data-tooltip-content="React"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiReact size={50} />
        <Tooltip anchorId="REACT" style={toolTipStyle} />
      </div>,
      <div
        id="Firebase"
        data-tooltip-content="Firebase"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiFirebase size={50} />
        <Tooltip anchorId="Firebase" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "Cryptomania",
    url: "https://youtu.be/EYW5ZX8XiWk",
    videoId: "EYW5ZX8XiWk",
    thumbnail: crypto,
    desc: [
      "A Ruby CLI gem game that simulates investment in historical cryptocurrencies with the aim to double funds and win the game, which runs on Terminal.",
      "It allows players to enter the past dates and invest given initial balance into their favourite crypto currencies, read about the currencies, and checkout in any future date they like to, and the program calculates the total earning at last to finalize a winner. It uses 'Nokogiri' to scrape details about the crypto and a crypto API to fetch rates data.",
    ],
    // desc2:
    //   "It allows players to enter the past dates and invest given initial balance into their favourite crypto currencies, read about the currencies, and checkout in any future date they like to, and the program calculates the total earning at last to finalize a winner. It uses 'Nokogiri' to scrape details about the crypto and a crypto API to fetch rates data.",
    links: {
      live: "https://rubygems.org/search?query=cryptomania",
      git: "https://github.com/AjayGhimire1998/cryptomania",
    },
    tools: [
      <div
        id="Ruby"
        data-tooltip-content="Ruby"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiRuby size={50} />
        <Tooltip anchorId="Ruby" style={toolTipStyle} />
      </div>,
      <div
        id="RubyGems"
        data-tooltip-content="RubyGems"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <SiRubygems size={50} />
        <Tooltip anchorId="RubyGems" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "Playmates",
    url: "https://youtu.be/HV8v0qiuvtI",
    videoId: "HV8v0qiuvtI",
    thumbnail: mates,
    desc: [
      "A Ruby on Rails gaming contents platform with user authentication, enabling users to post, share and chat about gaming contents, facilitating team-ups for like-minded players.",
      "The users can register and login using their email and view the gaming contents posted in the feed, set up their profile and be able to contents of their own, create a category their posts would belong to, and use it to filter the relative contents on that category. They can also team up with others directly through a chat system.",
    ],
    // desc2:
    //   "The users can register and login using their email and view the gaming contents posted in the feed, set up their profile and be able to contents of their own, create a category their posts would belong to, and use it to filter the relative contents on that category. They can also team up with others directly through a chat system.",
    links: {
      git: "https://github.com/AjayGhimire1998/Play-Mates",
    },
    tools: [
      <div
        id="Ruby"
        data-tooltip-content="Ruby"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiRuby size={50} />
        <Tooltip anchorId="Ruby" style={toolTipStyle} />
      </div>,
      <div
        id="Rails"
        data-tooltip-content="Rails"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <SiRubyonrails size={50} />
        <Tooltip anchorId="Rails" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "MovieFinder",
    url: "https://youtu.be/L78bUwIzYYo",
    videoId: "L78bUwIzYYo",
    thumbnail: movie,
    desc: [
      "A JavaScript web application built with OMDB and YOUTUBE API.",
      "The users can search for a movie with its title name and get all information about the selected movie and also watch the trailer of the movie from youtube.",
    ],
    // desc2:
    //   "The users can search for a movie with its title name and get all information about the selected movie and also watch the trailer of the movie from youtube.",
    links: {
      live: "https://ajayghimire1998.github.io/Movie-Finder/",
      git: "https://github.com/AjayGhimire1998/Movie-Finder",
    },
    tools: [
      <div
        id="JavaScript"
        data-tooltip-content="JavaScript"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiJavascript1 size={50} />
        <Tooltip anchorId="JavaScript" style={toolTipStyle} />
      </div>,
      <div
        id="HTML"
        data-tooltip-content="HTML"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiHtml5 size={50} />
        <Tooltip anchorId="HTML" style={toolTipStyle} />
      </div>,
      <div
        id="CSS"
        data-tooltip-content="CSS"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <DiCss3 size={50} />
        <Tooltip anchorId="CSS" style={toolTipStyle} />
      </div>,
    ],
  },
  {
    name: "Youtify",
    url: "https://youtu.be/IEl0hS8OP2k",
    videoId: "IEl0hS8OP2k",
    thumbnail: yout,
    desc: [
      "A single-page web application developed using Next.js, Tailwind CSS and open Youtube API.",
      "It allows users to login using google and search for a particular song to listen, as well as choose the song to play from the user's own youtube playlist.",
    ],
    // desc2:
    //   "It allows users to login using google and search for a particular song to listen, as well as choose the song to play from the user's own youtube playlist.",
    links: {
      live: "https://youtify-next.vercel.app/",
      git: "https://github.com/AjayGhimire1998/youtify-next",
    },
    tools: [
      <div
        id="Next"
        data-tooltip-content="Next"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <SiNextdotjs size={50} />
        <Tooltip anchorId="Next" style={toolTipStyle} />
      </div>,
      <div
        id="Tailwind"
        data-tooltip-content="Tailwind"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <SiTailwindcss size={50} />
        <Tooltip anchorId="Tailwind" style={toolTipStyle} />
      </div>,
      <div
        id="open API"
        data-tooltip-content="open API"
        data-tooltip-place="bottom"
        key={uuidv4()}
      >
        <TbApi size={50} />
        <Tooltip anchorId="open API" style={toolTipStyle} />
      </div>,
    ],
  },
];
