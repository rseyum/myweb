import Mock from "../mock";
const school="Year Up"
const database = {
  information: {
    name: 'Rahel Seyum',
    aboutContent: `Emerging professional and Motivated Current ${school} Application Development Student. My entire life, I used to deconstruct every toy I had to figure out how and why they worked the way they did and then reassemble them into the whole operation. These hard-ware skills drew me to work as a medical device assembler, tester, and programmer. It was simple for me to break into the industry, and I worked until I had to stop for Year Up. The technique for problem-solving, analyzing, and breaking down the problem into components is similar in hardware and software.`,
    aboutContent1:`It was when I pressed the play button on my first JavaScript tutorial on Scrimba.com, the spark I'd been missing ignited. I have been on my way to my dream destination on the main highway ever since. Front-end web programming appeals to all my interests; it combines creativity and problem-solving, allowing me to break the code better. I enjoy using responsive design ideas and seeing how my web functions. Learning new skills and programming languages, as well as problem-solving are among my talents.`,
    language: 'English, Tigrgna, Amharic',
    aboutContent2:`We, as humans, become bored with routine tasks. We frequently hunt for new and exciting things to do to break it. Hobbies are the most effective technique to divert attention while working. As a hobby, I educate children in a small community and like seeing them grow in love, knowledge, and discipline. My skills include. HTML, CSS, JavaScript and ReactJS, Git, GitHub.Please feel free to connect. I'm always ready for a lively discussion, collaboration, or knowledge exchange.`,
    email: '',
    address: 'Seattle, WA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/rahel-seyum/',
      dribbble: '',
      github: 'https://github.com/rseyum'
    },
    brandImage: '/images/rahel.jpg',
    aboutImage: '/images/rahel2.jpg',
    aboutImageLg: '/images/rahel2.jpg',
    cvfile: '/files/Rahel_Seyum_Resume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 100
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 90
    },
    {
      title: "Trello",
      value: 100
    },
    {
      title: "Figma",
      value: 100
    },
    {
      title: "Git",
      value: 100
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Redux",
      value: 70
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Snake Game",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/snake.jpg",
      largeImageUrl: ["images/snake.jpg"],
      url: 'https://github.com/rseyum/SnakeGame'
    },
    {
      id: 2,
      title: "Black Jack",
      subtitle: "HTML, CSS, and JavaScript",
      imageUrl: "images/blackJack.jpg",
      largeImageUrl: ["images/blackJack.jpg"],
      url: 'https://github.com/rseyum/Blackjack'
    },
    {
      id: 3,
      title: "Professional Of The Week Award!",
      subtitle: "Issued on June 2022",
      imageUrl: "images/potw.png",
      largeImageUrl: ["images/potw.png"],
      url: ''
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "May 2021 - February 2022",
        position: "Medical Device Assembler,Tester and Programmer",
        company: "Computech Corporation",
        details: "• Assembled FLX Thermage Tips per requirement, blueprint, or design, ensuring the best product quality.• Tested functionality of Ventx ultrasonic system Tips and handpieces, ensuring zero error. • Programmed Ventx tower, Tips, and handpieces ensuring productions were on schedule.  • Inspected Vesor, powerX handpiece for defects per documents ensuring 100% compliance. • Packaged and audited the products and reported daily produced quantities.• Trained New employees on various production lines, ensuring that 100% of production lines were on schedule and compliant with the standards. • Performed comprehensive medical device testing and reduced failure.• Reviewed, inspected, and resolved electromechanical issues when needed."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2021",
        graduation: "",
        university: "Year Up",
        details: "Application Development Track"
      },
      {
        id: 2,
        year: "2021",
        graduation: "",
        university: "Seattle Central College",
        details: "Application Development Track"
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['+12064836995'],
    emailAddress: ['rachiellseyum@gmail.com', 'rseyum@sea.yearup.org'],
    address: "Seattle WA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});