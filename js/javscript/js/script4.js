var objectOne = new Object();
objectOne.companyname = "facebook";
objectOne.companyaddress = "La";
objectOne.quartrous = new Object();
objectOne.quartrous.place = "Oman"
objectOne.quartrous.type = "head"

objectOne.quartrous["stock"] = 100;
var cost = 10000;
objectOne["cost of a share"]= cost;
console.log(objectOne);