class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    get value() {
        return this._value;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
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