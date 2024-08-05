import profile from "../../images/my-pictures/Ajay.png";
import profile_lite from "../../images/my-pictures/Ajay_lite.jpg";
import ajay1 from "../../images/my-pictures/ajay1.jpeg";
import ajay1_lite from "../../images/my-pictures/ajay1_lite.jpg";
import ajay2 from "../../images/my-pictures/ajay2.png";
import chocho from "../../images/my-pictures/chocho.JPG";
import wollies from "../../images/my-pictures/wollies.jpeg";
import chemist from "../../images/my-pictures/chemist.jpeg";
import academyXiCert from "../../images/my-pictures/academyXi.png";
import reactReduxCert from "../../images/my-pictures/react-redux-cert.png";
import rubyCert from "../../images/my-pictures/ruby-cert.png";
import responsiveCert from "../../images/my-pictures/responsive-cert.jpg";
import java from "../../images/my-pictures/Java.jpeg";
import javaIO from "../../images/my-pictures/JavaIO.jpeg";

export const aboutData = [
  {
    title: "From Dreams to Embracing the Detour.",
    quote: "See any detour as an opportunity to experience new things.",
    desc: [
      "I've always dreamed of being a software developer with my own multi-screen setup, sipping dark roasted coffee while coding the next big tech. But as they say, life has a funny way of taking us on detours.",
      "During my bachelor's degree in software development, I hit a financial rough patch and had to work extra jobs to support myself. That's when I found myself working as a kitchen hand in a busy Japanese restaurant. But, I was determined to shine! With my hard work and adaptability, I was promoted to cook in just six months.",
      "Just when things were starting to look up, Covid-19 hit, taking me four years to finally graduate with a bachelor's degree and a less than stellar performance. I was feeling down and out, but I wasn't ready to give up on my dream.",
    ],
    images: [chocho, wollies, chemist],
  },
  {
    title: "The Light at the End of the Tunnel",
    quote:
      "Rock bottom became the solid foundation in which I rebuilt my life.",
    desc: [
      "That is when I discovered Academy Xi, a software engineering boot-camp that reignited my passion for software development. I worked 60 hours a week, coding and learning with mentorship, while still working two days as a cook to make ends meet.",

      "For the first four months, I tackled front-end development with HTML, CSS, JavaScript, and React. I was on fire, developing three projects that even my mentor was impressed with. And then, Ruby-on-Rails became a piece of cake (or any flavour I wanted, for that matter). I was unstoppable! After my final e-commerce project, I earned a certified Software Engineering Transform badge.",
    ],
    images: [
      academyXiCert,
      java,
      javaIO,
      reactReduxCert,
      rubyCert,
      responsiveCert,
    ],
  },
  {
    title: "From slicing sashimis to slicing arrays",
    quote:
      "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    desc: [
      "I said goodbye to my cooking days and applied to endless number of jobs. However, fate had other plans. A friend from my hometown approached me with an exciting opportunity to contribute to his projects and intern at his startup, YashiTech. How could I, a passionate learner, turn down the chance to boost my portfolio?",

      "Without hesitation, I started reading through his codebases, and quickly making meaningful contributions. I have contributed in the development of Equitool, an accessibility browser plugin using just JavaScript, Sass and HTML. I have contributed in developing the company's website, and solo engineered the back-end with Ruby on Rails. I have also single-handedly developed a dashboard application for admin data management with TypeScript, and deployed the Ruby-on-Rails back-end in Render.",

      "These experiences have sharpened my skills, and deepened my understanding of software design, architecture and development. In my free time, I'm also brushing up on my Java skills.",

      "I'm now eagerly searching for an opportunity to join a dedicated and encouraging team here in Australia. Let's make some magic happen!",
    ],
    images: [ajay2, ajay1, profile],
    lazyImages: [ajay2, ajay1_lite, profile_lite],
  },
];
