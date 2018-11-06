// function test () {

// }

// const test2 = function () {

// }

// const test3 = function innerName () {}

/*
var log10Times = function innerName(i) {
    i = i || 0;
    console.log('log10Times')

    if(i < 9) innerName(++i)
}
// log10Times()
var log10TimesPrim = log10Times
log10Times = null // always place const with function!

log10TimesPrim()




const tenNumbers = function numbers (i) {
    i = (i === undefined) ? 10 : i
    
    console.log(i)

    if(i > 0) numbers(--i) 
}

tenNumbers()




pure vs non-pure function?



function callWith5and3(func) {
    return func(5, 3)
}



function call10Times(func) {

    for (i = 0; i < 10; i++) { func('BU!') }
}

call10Times(console.log)


numbers = ['placek', 22, 'gleba', 44, 'bezszczel']

numbers.forEach((element) => console.log(element))
*/

Array.prototype.myOwnForEach = function (func, thisArg) {
    for (let i = 0; i < this.length; i++) {
        func.call(thisArg, this[i], i, this);
    }
}

const bla = ['krowa', 3, 'placki']

bla.myOwnForEach((e) => console.log(e))