class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    get value() {
        return this.value;
    }

    get left() {
        return this.left;
    }

    get right() {
        return this.right;
    }

    set value(value) {
        this._value = value;
    }

    set left(left) {
        this._left = left;
    }

    set right(right) {
        this._right = right;
    }
}

export { Node };