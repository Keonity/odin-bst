import { Node } from "./node";

class Tree {
    constructor(array) {
        this.nodes = this.mergeSort(array);
        this.root = this.nodes[Math.floor(array.length / 2)];
    };

    removeDuplicates() {
        this.nodes = Array.from(new Set(this.nodes));
        this.root = this.nodes[Math.floor(this.nodes.length / 2)];
    }

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

        if (currNode.value === null) {
            return null;
        }

        this.root = currNode;
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

    insert(value) {
        let newNode = new Node(value);
        let currNode = this.root;
        console.log(`CurrNode: ${currNode}`);
        while (currNode) {
            console.log(currNode);
            console.log(newNode.value);
            if (currNode.value > newNode.value) {
                console.log(`Going left`);
                if (currNode.left) {
                    currNode = currNode.left;
                }
                else {
                    currNode.left = newNode;
                    return;
                }
            }
            else if (currNode.value < newNode.value) {
                console.log(`Going right`);
                if (currNode.right) {
                    currNode = currNode.right;
                }
                else {
                    currNode.right = newNode;
                    return;
                }
            }
            else if (currNode.value === newNode.value) {
                console.log(`Equal`);
                return;
            }
            else {
                console.log(`Else`);
                currNode = currNode.right;
            }
        }
    }

    delete(value) {
        let currNode = this.root;
        let prevNode;
        console.log(`CurrNode Delete: ${currNode}`);
        console.log(currNode);
        while (currNode.value !== null) {
            if (currNode.value === value) {
                if (currNode.left === null && currNode.right === null) {
                    if (currNode.value < prevNode.value) {
                        prevNode.left = null;
                    }
                    else {
                        prevNode.right = null;
                    }
                    currNode.value = null;
                }
            }
            else if (currNode.value < value) {
                prevNode = currNode;
                currNode = currNode.right;
            }
            else if (currNode.value > value) {
                prevNode = currNode;
                currNode = currNode.left;
            }
            
        }
        return;
    }
}

export { Tree };