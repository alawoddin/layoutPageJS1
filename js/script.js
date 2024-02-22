//create h2 tag for header
let x = document.createElement('h2');
x.textContent = 'international web site for your';

//create one p tag

let y = document.createElement('p');
y.textContent = 'that is one of best site around the world dont worry about for this site man '

//create one nice image for site

let z = document.createElement('img')
z.src = '../1.png';
z.alt = 'new image';

var nav = document.getElementById('nav');

nav.appendChild(x);
nav.appendChild(y);
nav.appendChild(z);