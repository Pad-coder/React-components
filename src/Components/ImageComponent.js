import bgshowcase1 from "../assets/img/bg-showcase-1.jpg";
import bgshowcase2 from "../assets/img/bg-showcase-2.jpg";
import bgshowcase3 from "../assets/img/bg-showcase-3.jpg";
import testimonials1 from "../assets/img/testimonials-1.jpg";
import testimonials2 from "../assets/img/testimonials-2.jpg";
import testimonials3 from "../assets/img/testimonials-3.jpg";
let Imagedata = [
  {
    img: bgshowcase1,
    h2: "Fully Responsive Design",
    p: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    Rightalign: true,
  },
  {
    img: bgshowcase2,
    h2: "Updated For Bootstrap 5",
    p: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    Rightalign: false,
  },
  {
    img: bgshowcase3,
    h2: "Easy to Use & Customize",
    p: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    Rightalign: true,
  },
];

let report = [
  {
    name: "Margaret E.",
    describe: "This is fantastic! Thanks so much guys!",
    imgsrc: testimonials1,
  },
  {
    name: "Fred S.",
    describe:
      "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    imgsrc: testimonials2,
  },
  {
    name: "Sarah W.",
    describe: "Thanks so much for making these free resources available to us!",
    imgsrc: testimonials3,
  },
];

export { Imagedata, report };
