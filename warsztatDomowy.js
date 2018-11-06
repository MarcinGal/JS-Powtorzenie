//my own forEach

Array.prototype.myOwnForEach = function (func, thisArg) {
    for(i = 0; i < this.length; i++){
        func.call(thisArg, this[i], i, this)
    }
}

const animals = ['cow', 'cat', 'fox']

animals.myOwnForEach((e, a, i, f) => console.log(e, a, i , f))