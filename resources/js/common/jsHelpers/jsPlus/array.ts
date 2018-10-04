interface Array<T> {
    last(): any;
}

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}

interface Array<T> {
    first(): any;
}

if (!Array.prototype.first) {
    Array.prototype.first = function () {
        return this[0];
    };
}

interface Array<T> {
    findElIndex(elm: any): number;
}

if (!Array.prototype.findElIndex) {
    Array.prototype.findElIndex = function (elm) {
        let index = -1;
        this.forEach((e, index_) => {
            if (e === elm)
                index = index_
        });
        return index;
    };
}

interface Array<T> {
    has(elm: any): boolean;
}

if (!Array.prototype.has) {
    Array.prototype.has = function (elm) {
        return this.findElIndex(elm) > -1;
    };
}

interface Array<T> {
    deleteObject(elm: any): number;
}

if (!Array.prototype.deleteObject) {
    Array.prototype.deleteObject = function (object) {
        let nbrDeleted = 0;
        let index = this.findElIndex(object);
        if (index > -1) {
            nbrDeleted++;
            this.splice(index, 1);
            nbrDeleted = nbrDeleted + this.deleteObject(object)
        }
        return nbrDeleted;
    };
}

interface Array<T> {
    notIn(arr: Array<T>): Array<T>;
}

if (!Array.prototype.notIn) {
    Array.prototype.notIn = function (array_filter) {
        let _this = this.__clone();
        if (Array.isArray(array_filter))
            array_filter.forEach(e => {
                _this.deleteObject(e)
            });
        return _this;
    };
}
// function array_move(arr, old_index, new_index) {
//     if (new_index >= arr.length) {
//         var k = new_index - arr.length + 1;
//         while (k--) {
//             arr.push(undefined);
//         }
//     }
//     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//     return arr; // for testing
// };
interface Array<T> {
    moveItem(old_index: number, new_index: number);
}

if (!Array.prototype.moveItem) {
    Array.prototype.moveItem = function (old_index: number, new_index: number) {
        if (new_index >= this.length) {
            let k = new_index - this.length + 1;
            while (k--) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    };
}

interface Array<T> {
    __clone(): Array<T>;
}

if (!Array.prototype.__clone) {
    Array.prototype.__clone = function () {
        return this.slice(0);
    };
}

