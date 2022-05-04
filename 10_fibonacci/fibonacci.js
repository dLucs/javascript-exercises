const fibonacci = function(member) {
    const fib = [0, 1];
    for (i = 2; i <= member; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    if (member < 0){
        return 'OOPS'
    }
    else{
        return fib[member]
    }
};

// Do not edit below this line
module.exports = fibonacci;
