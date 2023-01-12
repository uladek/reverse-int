module.exports = function reverse (n) {

    let reverseN = Math.abs(n).toString().split('');
    return +reverseN.reverse().join(''); 
   
}

// let reverseN = n.toString().split('');
// return parseFloat(reverseN.reverse().join('')); 

// let reverseN = Math.abs(n).toString().split('');
// return parseFloat(reverseN.reverse().join('')); 