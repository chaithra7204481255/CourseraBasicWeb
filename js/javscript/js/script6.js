function multiply(x, y){
return x*y;
}
console.log(multiply(4,2));
console.log(multiply.toString());
console.log(multiply);
multiply.version = "v1.0.1";
console.log(multiply.version);
console.log("example-----2");

// function factory

var myFunctn = function MultiFun(multiplier){
    var func1= function (x){
     return x * multiplier;
    };
    return func1;
}

var tripleVal = myFunctn(3);
console.log(tripleVal(3));

// passing function as args
function doOprtn(x, operation){
    return operation(x);
};
var fun1 = doOprtn(5 , tripleVal)
console.log(fun1);