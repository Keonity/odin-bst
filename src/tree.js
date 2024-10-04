import { Node } from "./node";

class Tree {
    constructor(array) {
        this.nodes = this.mergeSort(array);
        this.root = this.nodes[Math.floor(array.length / 2)];
    };

    buildTree(start, end) {
        var mid = parseInt((start + end) / 2);
        if (start > end) {
            return null;
        }
        console.log(`Start: ${start}, End: ${end}`);
        var currNode = new Node(this.nodes[mid]);
        currNode.left = this.buildTree(start, mid - 1);
        currNode.right = this.buildTree(mid + 1, end);
        console.log(currNode);
        return currNode;
    }

    merge(firstArray, secondArray) {
        let newArray = [];
    
        while (firstArray.length > 0 && secondArray.length > 0) {
            if (firstArray[0] < secondArray[0]) {
                newArray.push(firstArray.shift());
            }
            else {
                newArray.push(secondArray.shift());
            }
        }
    
        while (firstArray.length) {
            newArray.push(firstArray.shift());
        }
        while (secondArray.length) {
            newArray.push(secondArray.shift());
        }
    
        return newArray;
    }
    
    mergeSort(array) {
        if (array.length < 2) {
            return array;
        }
        else {
            let mid = Math.floor(array.length / 2);
            // console.log(`MergeSort: ` + array);
            let leftHalf = array.slice(0, mid);
            let rightHalf = array.slice(mid);
            return this.merge(this.mergeSort(leftHalf), this.mergeSort(rightHalf));
        }
    }
}

export { Tree };