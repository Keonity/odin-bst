import './styles.css';
import { Node } from './node';

console.log(`Welcome To The Odin BST Project`);

const resultHeader = document.querySelector(`#resultHeader`);
const description = document.querySelector(`#description`);
const searchbar = document.querySelector(`#searchbar`);
const submit = document.querySelector(`#submit`);
const loadAnimation = document.querySelector(`#loadAnimationOff`);

const newNode = new Node();
const leftNode = new Node("left");
newNode.value = "Root";
newNode.left = leftNode;
console.log(newNode);