function Circle(radius){
    this.radius = radius;
    return radius;
}
Circle.prototype.area = function (){
    return Math.PI * Math.pow(this.radius, 2);
}

var mycircle = new Circle(10);
console.log(Circle(2));
console.log(mycircle);

console.log("--------------------");

var square ={
    perimeter : 5,
    getArea: function(){
        // in nested function the value / parameter of the innermost functions will be set to the global object
        var self =this;
        var increaseRad = function(){
            self.perimeter = 20;
        };
        increaseRad();
        console.log(this.perimeter);
        return Math.PI * Math.pow(this.perimeter, 2);
    }
}
console.log(square.getArea());

