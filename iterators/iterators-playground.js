let myIterator = {
    count: 0,
    next: function () {
        if (this.count < 10) {
            return { val: ++this.count, nxt: true };
        }
        else { return { nxt: false }; }
    }
};

var res = myIterator.next();

while (res.nxt) {

    console.log('' + res.val, '', res.nxt);
    res = myIterator.next();
};



// [Symbol.iterator] usage.
let myIterable = {
    [Symbol.iterator]: () => {
        let myIterator = {
            count: 0,
            next: function () { // must be 'function' not '()=>'
                if (this.count < 10) {
                    return { value: ++this.count, done: false };  // must be value & done
                }
                else {
                    return { done: true };
                }
            }
        };
        return myIterator;
    }
}

for (i of myIterable) { console.log(i); };

// [Symbol.iterator] usage. Fibbonachi
let myIterable = {
    [Symbol.iterator]: () => {
        var f1 = 0, f2 = 1;
        var res =1;

        let myIterator = {

            next: function () { // must be 'function' not '()=>'
                if (res < 30) {
                    res = f1 + f2;
                    f1 = f2;
                    f2 = res;
                    return { value: res, done: false };  // must be value & done
                }
                else {
                    return { done: true };
                }
            }
        };
        return myIterator;
    }
}

for (i of myIterable) { console.log(i); };

// another way, with variables inside iterator object as properties accesing throught this
let myIterable = {
    [Symbol.iterator]: () => {
        
        let myIterator = {
            f1: 0,
            f2: 1,
            res: 1,
            next: function () { // must be 'function' not '()=>'
                if (this.res < 30) {
                    this.res = this.f1 + this.f2;
                    this.f1 = this.f2;
                    this.f2 = this.res;
                    return { value: this.res, done: false };  // must be value & done
                }
                else {
                    return { done: true };
                }
            }
        };
        return myIterator;
    }
}

for (i of myIterable) { console.log(i); };