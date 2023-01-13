import Mock from "../mock";
const school = "Year Up";
const database = {
  information: {
    name: "Rahel Seyum",
    aboutContent: `I'm a motivated Application Development Student in the ${school} program who aspires to become a well-rounded engineer by utilizing my JavaScript skills. The problem-solving, analyzing, and breaking down the problem into components is similar in hardware and software. When I pressed the play button on my first JavaScript tutorial on Scrimba.com, the spark I'd been missing ignited. 

    Since I was young, I have always deconstructed every toy I had to figure out how and why they worked the way they did and then reassemble them into the whole operation. These hardware skills drew me to work as a medical device assembler, tester, QA, and programmer. Working with complex hardware made me want to dive into the world of tech and led me to the Year Up Program as an Application Development student and intern. I currently work for Amazon as a QAE intern.
    
    Please feel free to connect. I'm always ready for a lively discussion, collaboration, or knowledge exchange.`,
    email: "",
    address: "Seattle, WA",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/rahel-seyum/",
      dribbble: "",
      github: "https://github.com/rseyum",
    },
    videoTwoMin: "youtube.com/watch?v=WyjJb0nCwMM",
    videoThirtySec: "https://www.youtube.com/watch?v=QMnlI7lWais",
    brandImage: "/images/rahel.jpg",
    play: "images/play.png",
    pause: "images/pause.png",
    slidel: "/images/1.jpg",
    slide2: "/images/2.jpg",
    slide3: "/images/3.jpg",
    slide4: "/images/4.jpg",
    slide5: "/images/5.jpg",
    slide6: "/images/6.jpg",
    slide7: "/images/7.jpg",
    slide8: "/images/8.jpg",
    aboutImage: "/images/6.jpg",
    aboutImageLg: "/images/6.jpg",
    cvfile: "/files/Rahel_Seyum.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details: "Figma, Trello, HTML, CSS, JavaScript, React, Redux ",
    },
    {
      title: "Web Development",
      icon: "code",
      details: "Figma, Trello, HTML, CSS, JavaScript, React, Redux ",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ],
  skills: [
    {
      title: "Quality Assurance",
      value: 100,
    },
    {
      title: "Test Plan Writing",
      value: 100,
    },
    {
      title: "Test Case Writing",
      value: 100,
    },
    {
      title: "Bug Reporting",
      value: 100,
    },
    {
      title: "Agile/Scrum",
      value: 100,
    },
    {
      title: "UI Automation",
      value: 100,
    },
    {
      title: "HTML5",
      value: 100,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 90,
    },
    {
      title: "Trello",
      value: 100,
    },
    {
      title: "Figma",
      value: 100,
    },
    {
      title: "Git",
      value: 100,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Redux",
      value: 70,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Professional Of The Week Award!",
      subtitle: "Issued on June 2022",
      imageUrl: "images/potw.jpg",
      largeImageUrl: ["images/potw.jpg"],
      url: "",
    },
    {
      id: 2,
      title: "Personal Portal!",
      subtitle: "HTML, CSS, JavaScript",
      imageUrl: "images/portal.jpg",
      largeImageUrl: ["images/portal.jpg"],
      url: "https://rseyum.github.io/portal-it115",
    },
    {
      id: 3,
      title: "Netflix Clone!",
      subtitle: "ReactJS",
      imageUrl: "images/netflix.jpg",
      largeImageUrl: ["images/netflix.jpg"],
      url: "https://netflix-25d49.web.app",
    },
    {
      id: 4,
      title: "Snake Game",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/snake.jpg",
      largeImageUrl: ["images/snake.jpg"],
      url: "https://github.com/rseyum/SnakeGame",
    },
    {
      id: 5,
      title: "Black Jack",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/blackJack.jpg",
      largeImageUrl: ["images/blackJack.jpg"],
      url: "https://github.com/rseyum/Blackjack",
    },
    {
      id: 6,
      title: "Group Project",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/group.JPG",
      largeImageUrl: ["images/group.JPG"],
      url: "https://ali810365.github.io/art/",
    },
    {
      id: 7,
      title: "Clock",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/clock.JPG",
      largeImageUrl: ["images/clock.JPG"],
      url: "https://rseyum.github.io/Clock/",
    },
    {
      id: 8,
      title: "Daily Grind",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/grind.jpg",
      largeImageUrl: ["images/grind.jpg"],
      url: " https://rseyum.github.io/daily-grind-it121/",
    },
    {
      id: 9,
      title: "DOM Play",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/dom.jpg",
      largeImageUrl: ["images/dom.jpg"],
      url: "https://rseyum.github.io/DOM-P/",
    },
    {
      id: 9,
      title: "Seasonal",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/seasonal.jpg",
      largeImageUrl: ["images/seasonal.jpg"],
      url: "https://rseyum.github.io/seasonal-styles/",
    },
    {
      id: 10,
      title: "Web Service",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/service.png",
      largeImageUrl: ["images/service.png"],
      url: " https://web-services1.rseyum.repl.co/",
    },
    {
      id: 11,
      title: "Snake Game",
      subtitle: "ReactJS",
      imageUrl: "images/snake.png",
      largeImageUrl: ["images/snake.png"],
      url: "https://snake-game-55895.web.app",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "May 2021 - February 2022",
        position: "Medical Device Assembler,Tester and Quality Assurance",
        company: "Computech Corporation",
        details:
          "• Assembled FLX Thermage Tips per requirement, blueprint, or design, ensuring the best product quality.• Tested functionality of Ventx ultrasonic system Tips and handpieces, ensuring zero error. • Programmed Ventx tower, Tips, and handpieces ensuring productions were on schedule.  • Inspected Vesor, powerX handpiece for defects per documents ensuring 100% compliance. • Packaged and audited the products and reported daily produced quantities.• Trained New employees on various production lines, ensuring that 100% of production lines were on schedule and compliant with the standards. • Performed comprehensive medical device testing and reduced failure.• Reviewed, inspected, and resolved electromechanical issues when needed.",
      },
      {
        id: 2,
        year: "Aug 2014 - Sep 2018",
        position: "Assembler and Quality Assurance Supervisor",
        company: "Claire Electronics Solutions(Motorola Solutions)",
        details:
          "• Checked the revision status of process documents and blueprint to meet the standard • Complied and assembled according to the process document and instructions • Implemented 5s areas at set times, improved the work environment and minimized waste • Supervised the work of junior assemblers and advised better approaches • Maximized production quality by introducing final inspection audits • Responsible for maintaining daily production logs and reporting to the production manager on employee attendance, quality, and quantity of finished items",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "Mar 2022 -Mar 2023",
        graduation: "",
        university: "Year Up",
        details: "Application Development Track",
      },
      {
        id: 2,
        year: "Mar 2022 - June 2024",
        graduation: "",
        university: "Seattle Central College",
        details: "Application Development Track",
      },
    ],
  },
  contactInfo: {
    phoneNumbers: ["+12064836995"],
    emailAddress: ["rachiellseyum@gmail.com", "rseyum@sea.yearup.org"],
    address: "Everett WA",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
