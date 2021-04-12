var array = new Array();
array[0]="yup";
array[1]=2;
array[2]=function (name) {
    return("hello" + name);
};
array[3]= {course: "html"};

console.log(array);
console.log(array[2]("maggie"));

var name = ["tae", "youg", "lohp"];
var myObj ={
    name : "shawn",
    course: "css",
    name1 : "rissa",
    course1: "js"
}

for(var prop in myObj){
    console.log(prop + ":" + myObj[prop]);
}

var names = ["js", "html"];
for(var name in names){
    console.log(":" + names[name]);
}