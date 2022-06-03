import Mock from "../mock";

const database = {
  information: {
    name: 'Rahel Seyum',
    aboutContent: "Emerging professional and Motivated Current YEAR UP Application Development Student. My entire life, I used to deconstruct every toy I had to figure out how and why they worked the way they did and then reassemble them into the whole operation. These hard-ware skills drew me to work as a medical device assembler, tester, and programmer. It was simple for me to break into the industry, and I worked until I had to stop for Year Up. The technique for problem-solving, analyzing, and breaking down the problem into components is similar in hardware and software.It was When I pressed the play button on my first JavaScript tutorial on Scrimba.com, the spark I'd been missing ignited. I have been on my way to my dream destination on the main highway ever since. Front-end web programming appeals to all my interests; it combines creativity and problem-solving, allowing me to break the code better. I enjoy using responsive design ideas and seeing how my web functions. Learning new skills and programming languages, as well as problem-solving are among my talents.We, as humans, become bored with routine tasks. We frequently hunt for new and exciting things to do to break it. Hobbies are the most effective technique to divert attention while working. As a hobby, I educate children in a small community and like seeing them grow in love, knowledge, and discipline. My skills include. HTML, CSS, JavaScript and ReactJS, Git, GitHub.Please feel free to connect. I'm always ready for a lively discussion, collaboration, or knowledge exchange.",
    language: 'English, Tigrgna, Amharic',
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
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: '',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: '',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: '',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
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
      title: "",
      subtitle: "",
      imageUrl: "",
      largeImageUrl: [""],
      url: ''
    },
    {
      id: 2,
      title: "",
      subtitle: "",
      imageUrl: "",
      largeImageUrl: [
        "",
        ""
      ],
      url: ''
    },
    {
      id: 3,
      title: "",
      subtitle: "",
      imageUrl: "",
      url: ''
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
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