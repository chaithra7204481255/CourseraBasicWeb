var x = 2;

function A(){
    var x= 5;
    B();
    // console.log(x);
}
function B(){
  console.log(x);
}
A();