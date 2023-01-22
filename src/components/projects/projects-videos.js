import { DiMongodb, DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";

export const videoLinks = [
  {
    name: "GoalsToScore",
    link: "https://youtu.be/aAT7HKS-DdU",
    desc: "A simple goals management app to create and update goals and their sub-tasks.",
    desc2: "The app requires a simple authentication, and allows a user to save their goals with tasks related to them. You can later add more tasks as needed and switch the status of each task to either pending or completed which updates in the backend synchronously.",
    tools: [<DiReact size={50}/>, <DiNodejs size={50}/>, <DiMongodb size={50}/>]
  },
];
