const hero = document.querySelector('.hero');

const tl = new TimelineMax();

tl.fromTo(hero,5,{width: "0%"},{height: "100%"});