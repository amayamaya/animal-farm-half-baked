import { animals } from '../data.js';
import { findById } from '../utils.js';


const nameEl = document.getElementById('name');
const imageEl = document.getElementById('image');
const sayingEl = document.getElementById('saying');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'), animals);

const animalParam = findById(params.get('id'), animals);
console.log(animalParam);

nameEl.textContent = animalParam.name; 
imageEl.src = `../assets/${animalParam.type}.svg`;
sayingEl.textContent = animalParam.says;
