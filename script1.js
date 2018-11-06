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
*/

const tenNumbers = function numbers (i) {
    i = (i === undefined) ? 10 : i
    
    console.log(i)

    if(i > 0) numbers(--i) 
}

tenNumbers()
