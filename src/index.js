import './styles.css';
import { Node } from './node';
import { Tree } from './tree';

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

const newTree = new Tree([1, 3, 2, 6, 5]);
console.log(newTree);

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

prettyPrint(newTree.buildTree(0, newTree.nodes.length));

const secondTest = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(secondTest);
secondTest.removeDuplicates();
secondTest.buildTree(0, secondTest.nodes.length)
secondTest.insert(2500);
prettyPrint(secondTest.root);