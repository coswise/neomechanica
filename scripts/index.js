// Custom Cursor
/*
  const circleLarge = document.querySelector(".NM-cursor__circle--large");
  const circleSmall = document.querySelector(".NM-cursor__circle--small");
  const circle = document.querySelector(".NM-cursor");

  const circleStyleLarge = circleLarge.style;
  const circleStyleSmall = circleLarge.style;
  const circleStyle = circle.style;
  const links = document.querySelectorAll("a");

  document.addEventListener("mousemove", e => {
    window.requestAnimationFrame(() => {
      circleStyle.top = `${ e.clientY - circle.offsetHeight/2 }px`;
      circleStyle.left = `${ e.clientX - circle.offsetWidth/2 }px`;
    });
  });


  // storing all h1 tags in a variable
  var headings = document.getElementsByTagName("a");

  // event listener must be in loop so we only modify
  // the actual element being touched, instead of all
  // elemnts that are stored in variable
  for(var i=0; i< headings.length; i++){
    headings[i].addEventListener("mouseover", hoverOn);
    headings[i].addEventListener("mouseout", hoverOff);
  }

  // functions to add and remove red color CSS class
  function hoverOn(){
    circle.classList.add("NM-cursor-hover");
  }
  function hoverOff(){
    circle.classList.remove("NM-cursor-hover")
  }
  */

const resourcesData = [ 
{"link":"https://foundation.app/@coswise/neomechanica/1","img":"https://assets.codepen.io/373860/Freya.jpg","name":"// Freya _ MetaD","svg":"https://assets.codepen.io/373860/Logo_Foundation.svg","marketplace":"Foundation Logo"},{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161701200074637313","img":"https://assets.codepen.io/373860/1-min.jpeg","name":"// Piers _ Vis","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"},   
{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161707797144403969","img":"https://assets.codepen.io/373860/Alice.jpg","name":"// Alice _ MetaD","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"},{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161705598121148417","img":"https://assets.codepen.io/373860/Bailey.jpeg","name":"// Bailey _ Vis","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"}, 
{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161706697632776193","img":"https://assets.codepen.io/373860/Amelia.jpeg","name":"// Amelia _ Vis","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"},                 
{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161704498609520641","img":"https://assets.codepen.io/373860/Lexi.jpeg","name":"// Lexi _ Vis","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"},
{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161702299586265089","img":"https://assets.codepen.io/373860/Clanger.jpeg","name":"// Clanger _ Vis","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"},
{"link":"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24867377158426142435215779578913191420820313709768769028395161703399097892865","img":"https://assets.codepen.io/373860/April.jpeg","name":"// April _ Vis","svg":"https://assets.codepen.io/373860/Logo_OpenSea.svg","marketplace":"OpenSea Logo"},
];

function resourceTemplate(resource) {
  return `
      <div class='NM-item NM-hover'>
              <a href='${resource.link}' class='NM-flex' target='_blank'>
                <img class='NM-NFT-thumbnail' src='${resource.img}' alt='${resource.name}' loading='lazy' />
                <div class='NM-item-info'>
                  <h4 class='NM-item-title NM-h4'>${resource.name}</h4>
                  <img src='${resource.svg}' alt='${resource.marketplace}' class='NM-marketplace-logo' />
                </div>
              </a>
            </div>
    `;
}


function loadResources() {

  document.querySelector(".NM-items-grid").innerHTML += resourcesData
    .splice(0, 4)
    .map(resourceTemplate)
    .join('');

  if (resourcesData.length === 0) { showMore.style.display = "none"; exploreMarketplaces.style.display = "inline-block"; }
}

document.addEventListener("DOMContentLoaded", loadResources);
showMore.addEventListener("click", loadResources);
