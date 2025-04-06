import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
 
 export const navLinks = [
    {
      id: 1,
      name: 's24+',
      href: '#home',
    },
    {
      id: 2,
      name: 'S24 Ultra',
      href: '#about',
    },
    {
      id: 3,
      name: 'Support',
      href: '#work',
    },
  
  ];

  const models2 = [
    {
      title: 'Galaxy S24 Ultra',
      color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
      img: yellowImg,
      originX: 100,
      originY: 200,
    },
    {
      title: 'Galaxy S24',
      color: ['#3498db', '#f1c40f', '#e74c3c'],
      img: blueImg,
      originX: 200,
      originY: 300,
    },
  ];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        
      ],
      video: highlightFirstVideo,
      videoDuration: 11,
    },
    {
      id: 2,
      textLists: [],
      video: highlightSecondVideo,
      videoDuration: 3,
    },
    {
      id: 3,
      textLists: [
        
      ],
      video: highlightThirdVideo,
      videoDuration: 6,
    },
    {
      id: 4,
      textLists: [],
      video: highlightFourthVideo,
      videoDuration: 3,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Galaxy S24 Titanium Blue",
      color: ["#5B798E", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "Galaxy S24 Titanium Green",
      color: ["#d4e5bb", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "Galaxy S24 Titanium Orange",
      color: ["#ff9248", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    
  ];
  
  export const sizes = [
    { label: 'S24 Ultra"', value: "small" },
    { label: 'S24"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];