function Makemultiply(multiplier){
    function b() {
        console.log("multiplier is "+ multiplier);
    }
    b();
    // in closures after the line 14 is executed the to execute the line from 7
    // due to closure
    // js preserves its lexical scope env where it has to preserve its env for internal function.
    return (
        function (x) {
            return multiplier * x ;
        }
    );
    }

   var doubleAll = Makemultiply(4);
    console.log(doubleAll);
    console.log(doubleAll(10)); // has its own execution
 