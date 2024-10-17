import './styles.css';
import { Node } from './node';
import { Tree } from './tree';

console.log(`Welcome To The Odin BST Project`);

const resultHeader = document.querySelector(`#resultHeader`);
const description = document.querySelector(`#description`);
const searchbar = document.querySelector(`#searchbar`);
const submit = document.querySelector(`#submit`);
const loadAnimation = document.querySelector(`#loadAnimationOff`);

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

const treeArray = [];
for (let i = 0; i < 100; i++) {
  treeArray.push(Math.floor(Math.random() * 100));
}

const driverTree = new Tree(treeArray);
driverTree.removeDuplicates();
prettyPrint(driverTree.buildTree(0, driverTree.nodes.length));
console.log(driverTree.isBalanced());
driverTree.levelOrder(driverTree.logNode);
driverTree.preOrder(driverTree.root, driverTree.logNode);
driverTree.inOrder(driverTree.root, driverTree.logNode);
driverTree.postOrder(driverTree.root, driverTree.logNode);

driverTree.insert(101);
driverTree.insert(102);
driverTree.insert(103);

console.log(driverTree.isBalanced());
driverTree.rebalance();
console.log(driverTree.isBalanced());

prettyPrint(driverTree.buildTree(0, driverTree.nodes.length));
driverTree.levelOrder(driverTree.logNode);
driverTree.preOrder(driverTree.root, driverTree.logNode);
driverTree.inOrder(driverTree.root, driverTree.logNode);
driverTree.postOrder(driverTree.root, driverTree.logNode);